import Home from './pages/Home.js';
import Quran from './pages/Quran.js';
import Reciters from './pages/Reciters.js';
import PrayerTimes from './pages/PrayerTimes.js';
import DailyVerse from './pages/DailyVerse.js';
import Hadith from './pages/Hadith.js';
import ProphetsStories from './pages/ProphetsStories.js';
import Dua from './pages/Dua.js';
import Tasbeeh from './pages/Tasbeeh.js';
import Tutorials from './pages/Tutorials.js';
import Quotes from './pages/Quotes.js';
import PrayerTracker from './pages/PrayerTracker.js';
import Repentance from './pages/Repentance.js';
import Nasheed from './pages/Nasheed.js';
import HalalHaram from './pages/HalalHaram.js';
import Books from './pages/Books.js';
import Progress from './pages/Progress.js';
import ComparativeReligion from './pages/ComparativeReligion.js';
import Settings from './pages/Settings.js';
import About from './pages/About.js';

const routes = {'':Home,'#/quran':Quran,'#/reciters':Reciters,'#/prayer':PrayerTimes,'#/dailyverse':DailyVerse,'#/hadith':Hadith,'#/prophets':ProphetsStories,'#/dua':Dua,'#/tasbeeh':Tasbeeh,'#/tutorials':Tutorials,'#/quotes':Quotes,'#/prayertracker':PrayerTracker,'#/repentance':Repentance,'#/nasheed':Nasheed,'#/halalharam':HalalHaram,'#/books':Books,'#/progress':Progress,'#/comparative':ComparativeReligion,'#/settings':Settings,'#/about':About};

function router(){const view=routes[location.hash]||Home;document.getElementById('app').innerHTML=view();}
window.addEventListener('hashchange',router);
window.addEventListener('load',router);