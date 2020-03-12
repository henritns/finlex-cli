# Finlex CLI

Command line utility for tracking Finnish legislation.

## Installation

This is a yet unpublished Node package. Global installation (e.g. with npm's `-g`) is recommended. The utility can then be accessed globally with the command `finlex`.

## Use

Example file initially:

```
Statute or e.g. topic name;;;
;;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/9.html;This is a section
;;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/10.html;
;;https://data.finlex.fi/eli/sd/2003/728/.html; Note this is a whole statute
```

After `finlex changes examples/initial.csv from 2000` we can view sections or whole statutes that have changed starting from statute 1/2000, preserving any comments and/or additional columns you might have had there:

```
Statute or e.g. topic name;;;
CHANGES;20160101;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/9.html; This is a section
CHANGES;20160101;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/10.html;
CHANGES;20160601;https://data.finlex.fi/eli/sd/2003/728/.html; This is a whole statute
```

And after manually reviewing the changes, we save the following CSV file:

```
Statute or e.g. topic name;;;
;20160101;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/9.html; This is a section
;20160101;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/10.html;
;20160601;https://data.finlex.fi/eli/sd/2003/728/.html; This is a whole statute
```

Reviews thereafter are initiated with `finlex changes <file>`.

Color highlighting for CSV is recommended. I guess this could work with a graphical editor such as Excel, too, but I haven't tried it.

Collaborative work on the file is possible through Git, for example.
