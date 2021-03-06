<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# minabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the minimum absolute value of a strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-minabs
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var minabs = require( '@stdlib/stats-base-minabs' );
```

#### minabs( N, x, stride )

Computes the minimum absolute value of a strided array `x`.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var N = x.length;

var v = minabs( N, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the minimum absolute value of every other element in `x`,

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];
var N = floor( x.length / 2 );

var v = minabs( N, x, 2 );
// returns 1.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = minabs( N, x1, 2 );
// returns 1.0
```

#### minabs.ndarray( N, x, stride, offset )

Computes the minimum absolute value of a strided array using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var N = x.length;

var v = minabs.ndarray( N, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the minimum absolute value for every other value in `x` starting from the second value

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
var N = floor( x.length / 2 );

var v = minabs.ndarray( N, x, 2, 1 );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   Depending on the environment, the typed versions ([`dminabs`][@stdlib/stats/base/dminabs], [`sminabs`][@stdlib/stats/base/sminabs], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var Float64Array = require( '@stdlib/array-float64' );
var minabs = require( '@stdlib/stats-base-minabs' );

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*100.0) - 50.0 );
}
console.log( x );

var v = minabs( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/base/dminabs`][@stdlib/stats/base/dminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/maxabs`][@stdlib/stats/base/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/min`][@stdlib/stats/base/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanminabs`][@stdlib/stats/base/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/sminabs`][@stdlib/stats/base/sminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-minabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-minabs

[test-image]: https://github.com/stdlib-js/stats-base-minabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-minabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-minabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-minabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-minabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-minabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-minabs/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-minabs/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-minabs/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-minabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-minabs/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dminabs]: https://github.com/stdlib-js/stats-base-dminabs

[@stdlib/stats/base/maxabs]: https://github.com/stdlib-js/stats-base-maxabs

[@stdlib/stats/base/min]: https://github.com/stdlib-js/stats-base-min

[@stdlib/stats/base/nanminabs]: https://github.com/stdlib-js/stats-base-nanminabs

[@stdlib/stats/base/sminabs]: https://github.com/stdlib-js/stats-base-sminabs

<!-- </related-links> -->

</section>

<!-- /.links -->
