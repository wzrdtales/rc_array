# rc_array

A wrapper around rc to allow arrays in environment configs

# Usage

First install it together with rc via npm.

    npm i -s rc rc_array

Next you can specify the key containing your translation references as the
first argument. All other arguments are passed to rc unmodified.

# Examples

The following environment variables

- test_test\_\_0 = 12
- test_translate=test_test

given the following code

```js
require("rc_array")("translate", "test");
```

Results in:

```json
{ "translate": "test_test", "test": ["12"], "_": [] }
```

If you have multiple targets of translation keys, you can specify them
like this:

- prefix_translate_0=prefix_firstkey
- prefix_translate_1=prefix_secondkey
- ...

# LICENSE

MIT License

Copyright (c) 2018 Tobias Gurtzick

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
