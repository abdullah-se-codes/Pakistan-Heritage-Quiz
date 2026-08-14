import { createMCQ, writeCategory } from './mcq_helper';
import { runMovement } from './data_movement';
import { runIcons } from './data_icons';
import { runScience } from './data_science';
import { runCulture } from './data_culture';
import { runMilitary } from './data_military';
import { runSports } from './data_sports';

console.log('Building all 6 categories with 105+ unique questions each...');

runMovement();
runIcons();
runScience();
runCulture();
runMilitary();
runSports();

console.log('All 6 categories built successfully!');
