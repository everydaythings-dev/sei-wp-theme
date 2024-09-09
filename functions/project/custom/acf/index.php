<?php

/**
 * Main Custom ACF fields Index
 *
 * This file serves as the primary index for including various custom ACF fields within the theme. 
 * It acts as a central point of entry, ensuring that all necessary functionality is properly loaded.
 * To add more functionality to the theme, you would typically include additional files here. 
 * This ensures that any new features or customizations are correctly loaded and integrated with the 
 * existing theme structure.
 */

 require get_template_directory() . '/functions/project/custom/acf/acf-all-backgrounds/init.php'; 
 require get_template_directory() . '/functions/project/custom/acf/acf-hero-backgrounds/init.php'; 
 require get_template_directory() . '/functions/project/custom/acf/acf-light-backgrounds/init.php'; 
 require get_template_directory() . '/functions/project/custom/acf/acf-message/init.php'; 
 require get_template_directory() . '/functions/project/custom/acf/acf-spacing/init.php'; 

?>