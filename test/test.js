/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var randu = require( '@stdlib/random-base-randu' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var stdev = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = stdev( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = stdev( 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a nonpositive `c`, the function returns `NaN`', function test( t ) {
	var y;

	y = stdev( 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = stdev( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = stdev( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = stdev( 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = stdev( PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = stdev( NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = stdev( NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the standard deviation of a Lévy distribution', function test( t ) {
	var mu;
	var c;
	var y;
	var i;

	for ( i = 0; i < 100; i++ ) {
		mu = ( randu()*10.0 ) - 5.0;
		c = randu() * 20.0;
		y = stdev( mu, c );
		t.equal( y, PINF, 'returns +Infinity' );
	}
	t.end();
});
