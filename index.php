<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://gmpg.org/xfn/11">

	<title><?php bloginfo('name'); ?><?php wp_title(); ?></title>

	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />	
	<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats please -->

	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
	<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
	<link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
	<link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="<?php bloginfo('atom_url'); ?>" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php wp_get_archives('type=monthly&format=link'); ?>
	<?php //comments_popup_script(); // off by default ?>
	<?php wp_head(); ?>
</head>
<body>
<div align="center">
	<table width="800">
		<tr>
			<td>
				<img src="<?php bloginfo('template_directory'); ?>/images/header.png"/>
			</td>
		</tr>

		<tr>
			<td>
				<table id="big-text" align="center">
					<tr>						
						<td>
							<a class="link" href="/">MAIN</a>
						</td>
						<td>
							<a class="link" href="#about">ABOUT</a>
						</td>
						<td>
							<a class="link" href="#services">SERVICES</a>
						</td>
						<td>
							<a class="link" href="#contacts">CONTACTS</a>
						</td>
					</tr>
				</table>
			<td>
		</tr>	
		
		<tr>
			<td>
				<img src="<?php bloginfo('template_directory'); ?>/images/line.png"/>
			</td>
		</tr>	
		
		<tr>
			<td>
				<img src="<?php bloginfo('template_directory'); ?>/images/image.png"/>
			</td>
		</tr>

		<tr>
			<td>
				<img src="<?php bloginfo('template_directory'); ?>/images/line.png"/>
			</td>
		</tr>
		
		
		<?php if ( have_posts() ) { ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
		<?php } ?>
		
		<tr id="services">
			<td colspan=4>
				<div id="big-text" align="center">
					<b>SERVICES<b>
				</div>
				<div id="small-text" width=400>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablablablablablablablablabla<br>
					blablablablablablablablablablabl
				</div>
			</td>
		</tr>

		<tr>
			<td>
				<table id="small-text" align="center">
					<tr>
						<td width=150>
							<img class="leftimg" src="<?php bloginfo('template_directory'); ?>/images/random4.png"/>
							lablabla<br>
							lablabla<br>
							lablabla<br>
						</td>
						<td width=150>
							<img class="leftimg" src="<?php bloginfo('template_directory'); ?>/images/random5.png"/>
							lablabla<br>
							lablabla<br>
							lablabla<br>
						</td>
						<td width=150>
							<img class="leftimg" src="<?php bloginfo('template_directory'); ?>/images/random6.png"/>
							lablabla<br>
							lablabla<br>
							lablabla<br>
						</td>
					</tr>
				</table>			
			</td>
		</tr>
		
		<tr>
			<td>
				<img src="<?php bloginfo('template_directory'); ?>/images/line.png"/>
			</td>
		</tr>	
		
		<tr id="contacts">
			<td>
				<table id="small-text" align="center">
					<tr>
						<td width=150>
							<img class="leftimg" src="<?php bloginfo('template_directory'); ?>/images/random7.png"/>
							lablabla<br>
							lablabla<br>
							lablabla<br>
						</td>
						<td width=150 valign="top">
							lablabla<br>
						</td>
						<td width=150 valign="top">				
							harry<br>							
							potter<br>
							bob217<br>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</div>
</body>
</html>