var args = arguments[ 0 ] || {},
    currentIndex = 0;

function containerPostLayout( ) {
	// check if properties set it to view
	$.container.applyProperties( args );
	// check if childern
	if( args.children ) {
		var buttonWidth = $.container.rect.width,
		    tabsLength = args.children.length;
		$.theSlide.setWidth( $.container.rect.width / tabsLength );
		_.map( args.children, function( _view, index ) {
			_view.width = buttonWidth / tabsLength;
			_view.index = index;
			$.tabsView.add( _view );
		} );

	}
	if( args.slideColor ) {
		$.theSlide.setBackgroundColor( args.slideColor );
	}
}

function tabsViewClicked( e ) {
	if( e.source.apiName === "Ti.UI.View" ) {
		var animation = Ti.UI.createAnimation( {
			left: e.source.index * e.source.width,
			duration: 150
		} );
		currentIndex = e.source.index;
		$.theSlide.animate( animation );
	} else {
		console.error( 'Please make all element that in your tab touchEnabled = false' );
	}
}

exports.getIndex = function( ) {
	return currentIndex;
};
