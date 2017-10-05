$(document).foundation();
$(window).on('load', () => {
	switchTabs('.js__tab', '.js__tab-content');
	//alert('hi');
});
function switchTabs(selectorTab, selectorContent) {
	$(selectorTab).eq(0).addClass('active');
	$(selectorContent).eq(0).addClass('active');
	$(selectorTab).on('click', (e) => {
		$(selectorTab).removeClass('active');
		$(e.target).addClass('active');
		$(selectorContent).removeClass('active');
		$(selectorContent).eq($(e.target).index()).addClass('active');
	})
}