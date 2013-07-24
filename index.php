
<body>
<?php get_header(); ?>
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
							<a class="link" href="/">Главная</a>
						</td>
						<td>
							<a class="link" href="#10">О нас</a>
						</td>
						<td>
							<a class="link" href="#8">Услуги</a>
						</td>
						<td>
							<a class="link" href="#contacts">Контакты</a>
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
				
				<tr>
					<td>
						<img src="<?php bloginfo('template_directory'); ?>/images/line.png"/>
					</td>
				</tr>
			<?php endwhile; ?>
		<?php } ?>
		
		<tr id="contacts">
			<td>
				<table id="small-text" align="center">
					<tr>
						<td width=150>
							<img class="leftimg" src="<?php bloginfo('template_directory'); ?>/images/random7.png"/>
							Улица<br>
							Зварыгиной<br>
							Татьяны<br>
						</td>
						<td width=150 valign="top">
							Адрес<br>
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
<?php get_footer(); ?>
</body>
</html>