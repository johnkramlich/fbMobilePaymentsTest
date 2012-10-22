$(document).ready(function(){
	
	$('#login-btn').click(function(){
		FB.login(function(response) {
	   if (response.authResponse) {
	     alert('Welcome!  Fetching your information.... ');
	 FB.api('/me', function(response) {
	   alert('Good to see you, ' + response.name + '.');
	     });
	   } else {
	     alert('User cancelled login or did not fully authorize.');
	   }
	 });
	});
	
	
	$('#buy-it-btn').click(function(){
		
		if( ! FB.UA.nativeApp()){
			FB.ui(
				{
					method: 'pay',
					action: 'buy_item',
					// order_info can be anything you want; it will be passed to your 
					// Payments callback's payments_get_items function, which should 
					// be able to process and respond to this data.
					order_info: {'item_id': '1a'}
				},
				function(result){
					if(typeof result.order_id !== 'undefined'){
						// Succcess
						alert('thank you for your order');
					} else {
						//Failure or cancel
						alert('order canceled');
					}
				}
			);
		} else {
			alert('Sorry Buddy, no facebook purchases in a native iOS app!');
		}
		
		
		
	});
	
	
	
	
	
	
	
	
	
});
