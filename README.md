# Finlex CLI

Command line utility for tracking legislation.

## Installation

Global installation `-g` recommended. The utility can then be accessed globally with command `finlex`.

## Use

Example file initially:

```
Kirjanpitoaineiston säilyttäminen;;
;;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/9.html
;;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/10.html
```
After `finlex changes example-current.csv from 2000`:
```
Kirjanpitoaineiston säilyttäminen;
CHANGES;20160101;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/9.html
CHANGES;20160101;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/10.html
```
And after manual review:
```
Kirjanpitoaineiston säilyttäminen;
 ;20160101;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/9.html
 ;20160101;https://data.finlex.fi/eli/sd/1997/1336/luku/2/pykala/10.html
 ```
 
 Reviews thereafter are initiated with `finlex changes example-current.csv`.
