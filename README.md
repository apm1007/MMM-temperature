# MMM-temperature
This a module for the [MagicMirror](https://github.com/MichMich/MagicMirror/tree/develop). It can tell you the room temperature in degree celsius via the temperature sensor DS18B20.

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/kapsolas/MMM-Instagram.git`. A new folder will appear, navigate into it.
2. Execute `npm install` to install the node dependencies.

## Config
The entry in `config.js` can include the following options:
```
{
      module: 'MMM-temperature',
      position: 'top_right',
      header: 'Innenraum Temperatur',
      config: {
        device: '28-0123456789ff'
      }
    }
```

|Option|Description|
|---|---|
|`device`|Insert your connected DS18B20 Temperature Sensor ID<br>This value is **REQUIRED**|

## Dependencies
- [exec-php](https://www.npmjs.com/package/exec-php) (installed via `npm install`)

## Important Notes
- This is one of my first projects using Node, so feel free to submit pull requests or post on the issues/wiki and I will do my best to improve the project. The project is few months old so I don't remember why I chose php instead of python etc.

## Special Thanks
- [Michael Teeuw](https://github.com/MichMich) for creating the awesome [MagicMirror2](https://github.com/MichMich/MagicMirror/tree/develop) project that made this module possible.

<3 https://www.one-4-u.de

The MIT License (MIT)
=====================

Copyright © 2016 Sebastian Wiedling

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
