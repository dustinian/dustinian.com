<html lang="en">
<head>
	<title><?php echo $title; ?> - dustinian.com</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="/_styles/_dustinian.css" />
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-22031167-1']);
		_gaq.push(['_trackPageview']);
		(function(){
		var ga = document.createElement('script');
		ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
		})();
	</script>
	<script type="text/javascript" src="https://apis.google.com/js/platform.js" async defer></script>
</head>
<body<?php if(isset($style)){echo' class="',$style,'"';} ?><?php if(isset($id)){echo' id="',$id,'"';} ?>>
<?php include_once("/home2/dustinia/php/navigation.php"); ?>
<div class="layout" id="content">
