#!/usr/bin/env node

const fs = require("fs")
const axios = require("axios")

if (process.argv[2] === "changes") {
  changes(process.argv)
}

async function changes(args) {
  try {
    if (
      process.argv[4] === "from" &&
      process.argv[5] &&
      /^\d{4}$/.test(process.argv[5])
    ) {
      var from = process.argv[5]
    }
    const content = fs.readFileSync(process.argv[3], "utf8")
    rows = content.split("\n")
    for (let [i, r] of rows.entries()) {
      let cells = r.split(";")
      if (cells.length < 3) {
        process.stderr.write(`Abnormal row (${i + 1}). Aborting...`)
        process.exit(1)
      }
      const trimmed = cells[1].trim()
      if (/^\d{8}$/.test(trimmed)) {
        var comparison = trimmed
      } else if (from) {
        var comparison = `${from}0000`
        cells[1] = ` ${comparison}`
      }
      if (comparison && /^https:\/\/data.finlex.fi\/.*.html$/.test(cells[2])) {
        const res = await axios.get(cells[2].replace(".html", ".jsonld"))
        const versions = []
        res.data.temporalVersions.forEach(v => {
          if (/\d{8}$/.test(v)) {
            versions.push(v.slice(v.length - 8))
          }
        })
        if (versions.length) {
          versions.sort().reverse()
          if (versions[0] > comparison) {
            rows[i] = `CHANGES;${versions[0]};${cells[2]}`
          } 
        }
      }
    }
    data = rows.join("\n")
    fs.writeFileSync(process.argv[3], data)
    console.log(`Wrote to ${process.argv[3]}`)
  } catch (e) {
    console.error(e)
  }
}
