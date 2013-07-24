
<body>
<?php get_header(); ?>
<div align="center">
	<table width="800">
		
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

		<?php if ( have_posts() ) { ?>
			<?php while ( have_posts() ) : the_post(); ?>				
				<tr>
					<td>
						<img src="<?php bloginfo('template_directory'); ?>/images/line.png"/>
					</td>
				</tr>
				
				<tr id="<?php the_ID(); ?>">
					<td>
						<div id="big-text" align="center">
							<b><?php the_title(); ?><b>
						</div>
						<div id="small-text" width=400>
							<?php the_content(); ?>
						</div>
						<table id="small-text" align="center">
							<tr>
								<td width=150>
									<img class="leftimg" src="<?php bloginfo('template_directory'); ?>/images/random1.png"/>
									lablabla<br>
									lablabla<br>
									lablabla<br>
								</td>
								<td width=150>
									<img class="leftimg" src="<?php bloginfo('template_directory'); ?>/images/random2.png"/>
									lablabla<br>
									lablabla<br>
									lablabla<br>
								</td>
								<td width=150>
									<img class="leftimg" src="<?php bloginfo('template_directory'); ?>/images/random3.png"/>
									lablabla<br>
									lablabla<br>
									lablabla<br>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			<?php endwhile; ?>
		<?php } ?>
	</table>
</div>
<?php get_footer(); ?>
</body>
</html>