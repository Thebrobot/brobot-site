import fs from 'fs';
import path from 'path';

const source = '/Users/kyleartman/.cursor/projects/Users-kyleartman-Desktop-brobot-review-copy/assets/Black_and_blue_brobot_landscape_trans__3_-a60ea309-76b1-4453-914f-db98f9be46a6.png';
const target = '/Users/kyleartman/Desktop/brobot review copy/public/images/brobot_black_blue_landscape.png';

fs.copyFileSync(source, target);
console.log('Logo copied successfully');
