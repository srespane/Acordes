
var chordtable=new Array(
["01023X","35553X","889AA8","31023X","CDCEFX","CDCAXX",
"46664X","99ABB9","12134X","DCDBXX",
"2320XX","57775X","AABCCA","23245X","5770XX","AAB0XX",
"68886X","34356X","3431XX","BBCDDB","FEFDXX",
"001220","79997X","45467X","0012XX","4542XX",
"112331","8AAA8X","56578X","1123XX","5653XX",
"223442","9BBB9X","67689X","2234XX","6764XX",
"300023","334553","ACCCAX","7879AX","330023","3345XX","7875XX",
"445664","898ABX","4456XX","8986XX","BDDDBX",
"02220X","556775","9A9BCX","55670X","9A970X","CEEECX",
"13331X","667886","6678XX","ABA8XX","DFFFDX","ABACDX",
"24442X","778997","7789XX","BCB9XX","BCBDEX"],
["34553X","888AA8","31013X",
"45664X","999BB9",
"1320XX","56775X","AAACCA",
"67886X","2431XX",
"000220","78997X","0809A0","3542XX",
"111331","89AA8X","4653XX",
"222442","9ABB9X","5764XX",
"333553","ABCCAX","6875XX",
"444664","7986XX","BCDDBX",
"01220X","555775","55520X","8A97XX","CDEECX",
"12331X","666886","9BA8XX","DEFFDX",
"23442X","777997","ACB9XX"],
["X4543X","XX8A98",
"X5654X","XX9BA9",
"1310XX","XXACBA",
"X7876X",
"X8987X","XX0210",
"X9A98X","XX1321",
"XABA9X","XX2432",
"XBCBAX","XX3543",
"XX4654","XCDCBX",
"XX5765","X1210X","XDEDCX",
"XX6876","X2321X","XEFEDX",
"XX7987","X3432X"],
["01123X","899AXX","XX5678",
"X2234X","9AABXX","XX6789",
"2330XX","X3345X","ABBCXX","XX789A",
"X4456X","XX89AB",
"011230","X5567X","XX9ABC",
"X6678X","1223XX",
"X7789X","2334XX",
"300123","X889AX","3445XX","X10123",
"X99ABX","4556XX","XX1234",
"12230X","5667XX","XX2345",
"XX7456","6778XX","XX3456",
"X00567","X08567","7889XX","XX4567"],
["11033X","36553X","88AAA8",
"47664X","99BBB9","X2144X",
"3320XX","58775X","AACCCA","X3255X",
"69886X","X4366X",
"002220","7A997X","002200","004200","054770",
"113331","8BAA8X","1133XX","X6588X",
"224442","9CBB9X","X7699X",
"310033","335553","X87AAX",
"446664","4466XX","X98BBX",
"03220X","557775","03200X","XA9CCX",
"14331X","668886",
"25442X","779997"],
["01223X","55553X","CACAXX","8A9A00",
"66664X","9BAB00","DBDBXX",
"2020XX","77775X","ACBC00",
"3131XX","88886X","FDFDXX",
"021220","99997X","4242XX","0212XX",
"1323XX","AAAA8X","5353XX",
"2434XX","BBBB9X","6464XX","2434XX",
"000023","CCCCAX","7575XX","3545XX",
"4656XX","8686XX",
"22220X","9797XX","5767XX","02240X","0ABB0X",
"6878XX","33331X","A8A8XX",
"20112X","44442X","B9B9XX","7989XX"],
["01323X","35353X","8898A8","X898X8",
"46464X","99A9B9","X9A9X9",
"2120XX","57575X","AABACA","XABAXA",
"3231XX","68686X","XBCBXB",
"001020","031220","031020","79797X",
"112131","8A8A8X","X121X1","5453XX",
"223242","9B9B9X","X232X2",
"100023","334353","ACACAX","X343X3",
"445464","X454X4",
"02020X","32220X","32020X","556575","X565X5",
"13131X","667686","X676X6",
"20212X","24242X","778797","X787X7"],
["00023X","35453X","CCCAXX","789AXX","30023X",
"46564X","89ABXX","DDDBXX",
"2220XX","57675X","9ABCXX","EEECXX",
"3331XX","68786X","3331XX","FFFDXX",
"444220","79897X","X01120","4442XX",
"0123XX","8A9A8X","5553XX",
"1234XX","9BAB9X","6664XX",
"200023","ACBCAX","7775XX","2345XX",
"3456XX","8886XX",
"02120X","9997XX","4567XX",
"13231X","AAA8XX","5678XX",
"24342X","BBB9XX","6789XX"],
["03323X","A898A8","8878X8",
"X4434X","B9A9B9","9989X9",
"0120XX","X5545X","CABACA","AA9AXA",
"X6656X","BBABXB",
"X7767X","201020","CCBCXC",
"X8878X","312131","1101X1",
"X9989X","423242","2212X2",
"XAA9AX","534353","3323X3",
"XBBABX","645464","4434X4",
"32420X","55450X","75650X","756575","XCCBCX","55450X",
"X1101X","867686","8676X6","6656X6",
"X2212X","978797","7767X7"],
["01003X","03023X","33023X","35753X","A89AXX","33553X","03003X",
"46864X","B9ABXX","44664X","12114X","14114X",
"03245X","57975X","CABCXX","55775X","23225X","25225X",
"68A86X","66886X","34336X","36336X",
"001420","201220","79B97X","77997X","45447X","47447X",
"3123XX","8ACA8X","88AA8X","56558X","58558X",
"4234XX","99BB9X","67669X","69669X","9BDB9X",
"300003","302023","5345XX","500023","AACCAX","7877AX","7A77AX","ACECAX",
"6456XX","8988BX","8B88BX","BDEDBX",
"02420X","00670X","7567XX","00220X","9A99CX","9C99CX",
"13531X","8678XX","11331X",
"24642X","9789XX","22442X"],
["8A8AA8","BACAXX","X1213X",
"9B9BB9","X2324X","CBDBXX",
"1020XX","ACACCA","X3435X","DCECXX",
"2131XX","X4546X","EDFDXX",
"020220","3242XX","X5657X",
"131331","4353XX","X6768X",
"242442","5464XX","X7879X",
"353553","6575XX","X898AX",
"464664","7686XX","X9A9BX",
"21220X","8797XX","575775","XABACX","0ABA0X",
"686886","98A8XX",
"797997","A9B9XX","X0102X"],
["34353X","8B8AA8","8888A8","8B88A8","X888X8",
"45464X","9C9BB9","9999B9","9C99B9","X999X9",
"1120XX","56575X","AAAACA","XAAAXA","ADAACA",
"2231XX","67686X","XBBBXB","BEBBDB",
"030220","000020","030020","78797X","XCCCXC","330220","300020","330020","3342XX","CFCCEC",
"141331","111131","141131","898A8X","X111X1",
"252442","222242","252242","9A9B9X","X222X2",
"363553","333353","363353","ABACAX","X333X3",
"474664","444464","474464","X444X4","BCBDBX",
"01020X","31220X","31020X","585775","555575","585575","055505","CDCECX",
"12131X","696886","666686","696686","X666X6","DEDFDX",
"23242X","7A7997","777797","7A7797","X777X7","20202X"],
["34453X","X889X8","788AXX",
"45564X","X99AX9","899BXX",
"1220XX","XAABXA","9AACXX",
"2331XX","XBBCXB",
"3442XX","XCCDXC",
"0113XX","X112X1","XDDEXD",
"5664XX","X223X2","1224XX","XEEFXE",
"6775XX","X334X3","2335XX",
"7886XX","X445X4","3446XX",
"01120X","X556X5","4557XX",
"12231X","X667X6","5668XX",
"23342X","X778X7","6779XX"],
["X3313X","A888A8","XX7868","ABCAXX",
"X4424X","B999B9","XX8979",
"X5535X","CAAACA","XX9A8A","0120XX",
"X6646X","XXAB9B","1231XX",
"X7757X","200020","230020","230220","XXBCAC","0CBCA0","234220",
"X8868X","311131","3453XX",
"X9979X","422242","XX1202","4564XX",
"XAA8AX","533353","XX2313","5675XX",
"XBB9BX","644464","XX3424","6786XX",
"XCCACX","755575","31420X","75550X","XX4535","7897XX",
"866686","XX5646","89A8XX",
"X2202X","977797","XX6757","9AB9XX"],
["13303X","33333X","6678X8",
"244X4X","44444X","7789X9",
"3550XX","55555X","889AXA",
"466X6X","66666X","99ABXB",
"232220","202020","77777X","AABCXC",
"313131","88888X",
"424242","99999X","0012X2",
"535353","AAAAAX","1123X3",
"646464","BBBBBX","2234X4",
"00000X","757575","33450X","CCCCCX","33450X",
"868686","11111X","4456X6",
"979797","22222X","5567X7"],
["11333X","36353X","88A8A8",
"22444X","99B9B9","47464X",
"33555X","58575X","3120XX","AACACA",
"44666X","69686X","BBDBDB",
"002020","7A797X","55777X","CCECEC",
"113131","8B8A8X","66888X","DDFDFD",
"224242","9C9B9X","77999X",
"335353","88AAAX",
"446464","99BBBX","4466XX",
"03020X","557575","AACCCX","33020X","33220X",
"668686","14131X",
"779797","25242X","00222X"],
["53323X","5578X8","AA98X8",
"64434X","6689X9","BBA9X9",
"75545X","779AXA","CCBAXA",
"86656X","88ABXB",
"97767X","99BCXC","2210X0",
"A8878X","332101",
"B9989X","4432X2",
"0023X3","CAA9AX","5543X3",
"1134X4","6654X4",
"22450X","7765X5",
"3356X6","8876X6",
"4467X7","9987X7"],
["33223X","887778",
"44334X","998889",
"55445X","AA999A",
"66556X","BBAAAB",
"77667X","CCBBBC",
"88778X","110001",
"99889X","221112",
"AA99AX","332223",
"BBAABX","443334",
"CCBBCX","55440X","554445",
"11001X","665556",
"22112X","776667"],
["X5543X","879AXX","XX9A98","CDBAXX",
"X6654X","98ABXX","XXABA9","DECBXX",
"2310XX","X7765X","A9BCXX","XXBCBA","EFDCXX",
"3421XX","X8876X",
"4532X0","X9987X","XX1210",
"5643XX","XAA98X","1023XX","XX2321",
"6754XX","XBBA9X","2134XX","XX3432",
"7865XX","XCCBAX","3245XX","XX4543",
"8976XX","4356XX","XX5654",
"54670X","9A870X","X2210X","XX6765",
"AB98XX","X3321X","6578XX","XX7876",
"BCA9XX","X4432X","7689XX","XX8987"],
["05343X","XX9898","CBBAXX",
"X6454X","XXA9A9",
"2110XX","X7565X","XXBABA",
"X8676X","XXCBCB","3221XX",
"097870","XX1010","4332XX",
"XA898X","XX2121","5443XX",
"XB9A9X","XX3232","6554XX",
"XCABAX","XX4343","7665XX",
"XX5454","8776XX",
"X2010X","54650X","XX6565","9887XX",
"X3121X","XX7676","A998XX",
"X4232X","XX8787","BAA9XX"],
["45363X","8998X8",
"56474X","9AA9X9",
"67585X","ABBAXA",
"78696X","BCCBXB",
"897A70","0110X0",
"9A8B8X","1221X1",
"AB9C9X","2332X2",
"3443X3","BCADAX",
"4554X4","CDBEBX",
"12030X","5665X5","DECFCX",
"23141X","6776X6",
"34252X","7887X7"],
["X87978","787AXX","X3423X","00003X",
"X98A89","898BXX","X4534X","11114X",
"XA9B9A","9A9CXX","X5645X","22225X",
"1301XX","XBACAB","X6756X","33336X","ABADXX",
"201120","444470","X7867X","BCBEXX",
"010301","X10201","0103XX","X8978X","55558X","CDCFXX",
"X21312","1214XX","X9A89X","66669X",
"X32423","2325XX","XAB9AX","7777AX",
"X43534","3436XX","XBCABX","8888BX",
"X54645","4547XX","99990X",
"11201X","X65756","5658XX","X1201X",
"X76867","6769XX","X2312X"],
["010230",
"010231",
"010233","355533",
"232002","232452",
"23203X",
"23202X",
"23201X",
"23200X","57770X","AABC0X","AABCCX",
"00122X","799977",
"00124X",
"0010XX",
"0011XX",
"0013XX","001221",
"001222",
"001223",
"001224","454674",
"00022X","789977",
"00024X",
"0000XX",
"0001XX",
"0003XX","000221",
"0004XX","000222",
"000223",
"000224",
"11233X","8AAA88",
"1120XX",
"1121XX",
"1122XX",
"112303",
"11230X","565785",
"89AA88",
"3340XX","ACCCAA","33455X",
"300020",
"300021",
"300022",
"7879A7",
"3330XX","ABCCAA",
"022204",
"022203",
"022202",
"022201",
"022200","556700","556770",
"02224X","9A9BC9",
"012204",
"012203",
"012202",
"012201",
"012200","555700","555770",
"01223X"]
);

var chordversions=new Array(
[["C","DO",6],["C#","DO#",4],["D","RE",6],["D#","RE#",5],["E","MI",5],["F","FA",5],["F#","FA#",5],["G","SOL",7],["G#","SOL#",5],["A","LA",6],["A#","LA#",6],["B","SI",5]],
[["Cm","DOm",3],["C#m","DO#m",2],["Dm","REm",3],["D#m","RE#m",2],["Em","MIm",4],["Fm","FAm",3],["F#m","FA#m",3],["Gm","SOLm",3],["G#m","SOL#m",3],["Am","LAm",5],["A#m","LA#m",4],["Bm","SIm",3]],
[["Cdim","DOdim",2],["C#dim","DO#dim",2],["Ddim","REdim",2],["D#dim","RE#dim",1],["Edim","MIdim",2],["Fdim","FAdim",2],["F#dim","FA#dim",2],["Gdim","SOLdim",2],["G#dim","SOL#dim",2],["Adim","LAdim",3],["A#dim","LA#dim",3],["Bdim","SIdim",2]],
[["Caug","DOaug",3],["C#aug","DO#aug",3],["Daug","REaug",4],["D#aug","RE#aug",2],["Eaug","MIaug",3],["Faug","FAaug",2],["F#aug","FA#aug",2],["Gaug","SOLaug",4],["G#aug","SOL#aug",3],["Aaug","LAaug",3],["A#aug","LA#aug",3],["Baug","SIaug",4]],
[["Csus","DOsus",3],["C#sus","DO#sus",3],["Dsus","REsus",4],["D#sus","RE#sus",2],["Esus","MIsus",5],["Fsus","FAsus",4],["F#sus","FA#sus",3],["Gsus","SOLsus",3],["G#sus","SOL#sus",3],["Asus","LAsus",4],["A#sus","LA#sus",2],["Bsus","SIsus",2]],
[["C6","DO6",4],["C#6","DO#6",3],["D6","RE6",3],["D#6","RE#6",3],["E6","MI6",4],["F6","FA6",3],["F#6","FA#6",4],["G6","SOL6",4],["G#6","SOL#6",2],["A6","LA6",5],["A#6","LA#6",3],["B6","SI6",4]],
[["C7","DO7",4],["C#7","DO#7",3],["D7","RE7",4],["D#7","RE#7",3],["E7","MI7",4],["F7","FA7",4],["F#7","FA#7",3],["G7","SOL7",4],["G#7","SOL#7",2],["A7","LA7",5],["A#7","LA#7",3],["B7","SI7",4]],
[["Cmaj7","DOmaj7",5],["C#maj7","DO#maj7",3],["Dmaj7","REmaj7",4],["D#maj7","RE#maj7",4],["Emaj7","MImaj7",4],["Fmaj7","FAmaj7",3],["F#maj7","FA#maj7",3],["Gmaj7","SOLmaj7",4],["G#maj7","SOL#maj7",2],["Amaj7","LAmaj7",3],["A#maj7","LA#maj7",3],["Bmaj7","SImaj7",3]],
[["C9","DO9",3],["C#9","DO#9",3],["D9","RE9",4],["D#9","RE#9",2],["E9","MI9",3],["F9","FA9",3],["F#9","FA#9",3],["G9","SOL9",3],["G#9","SOL#9",3],["A9","LA9",6],["A#9","LA#9",4],["B9","SI9",3]],
[["Cadd9","DOadd9",7],["C#add9","DO#add9",5],["Dadd9","REadd9",6],["D#add9","RE#add9",4],["Eadd9","MIadd9",6],["Fadd9","FAadd9",5],["F#add9","FA#add9",5],["Gadd9","SOLadd9",8],["G#add9","SOL#add9",4],["Aadd9","LAadd9",6],["A#add9","LA#add9",3],["Badd9","SIadd9",3]],
[["Cm6","DOm6",3],["C#m6","DO#m6",3],["Dm6","REm6",4],["D#m6","RE#m6",3],["Em6","MIm6",3],["Fm6","FAm6",3],["F#m6","FA#m6",3],["Gm6","SOLm6",3],["G#m6","SOL#m6",3],["Am6","LAm6",5],["A#m6","LA#m6",2],["Bm6","SIm6",3]],
[["Cm7","DOm7",5],["C#m7","DO#m7",5],["Dm7","REm7",5],["D#m7","RE#m7",4],["Em7","MIm7",10],["Fm7","FAm7",5],["F#m7","FA#m7",5],["Gm7","SOLm7",5],["G#m7","SOL#m7",5],["Am7","LAm7",8],["A#m7","LA#m7",6],["Bm7","SIm7",6]],
[["Cmmaj7","DOmmaj7",3],["C#mmaj7","DO#mmaj7",3],["Dmmaj7","REmmaj7",3],["D#mmaj7","RE#mmaj7",2],["Emmaj7","MImmaj7",2],["Fmmaj7","FAmmaj7",3],["F#mmaj7","FA#mmaj7",4],["Gmmaj7","SOLmmaj7",3],["G#mmaj7","SOL#mmaj7",3],["Ammaj7","LAmmaj7",3],["A#mmaj7","LA#mmaj7",3],["Bmmaj7","SImmaj7",3]],
[["Cm9","DOm9",4],["C#m9","DO#m9",3],["Dm9","REm9",4],["D#m9","RE#m9",3],["Em9","MIm9",7],["Fm9","FAm9",3],["F#m9","FA#m9",4],["Gm9","SOLm9",4],["G#m9","SOL#m9",4],["Am9","LAm9",6],["A#m9","LA#m9",3],["Bm9","SIm9",4]],
[["C11","DO11",3],["C#11","DO#11",3],["D11","RE11",3],["D#11","RE#11",3],["E11","MI11",4],["F11","FA11",2],["F#11","FA#11",3],["G11","SOL11",3],["G#11","SOL#11",3],["A11","LA11",5],["A#11","LA#11",3],["B11","SI11",3]],
[["C7sus4","DO7sus4",3],["C#7sus4","DO#7sus4",3],["D7sus4","RE7sus4",4],["D#7sus4","RE#7sus4",3],["E7sus4","MI7sus4",4],["F7sus4","FA7sus4",4],["F#7sus4","FA#7sus4",3],["G7sus4","SOL7sus4",2],["G#7sus4","SOL#7sus4",3],["A7sus4","LA7sus4",5],["A#7sus4","LA#7sus4",2],["B7sus4","SI7sus4",3]],
[["C13","DO13",3],["C#13","DO#13",3],["D13","RE13",3],["D#13","RE#13",2],["E13","MI13",3],["F13","FA13",2],["F#13","FA#13",2],["G13","SOL13",3],["G#13","SOL#13",2],["A13","LA13",2],["A#13","LA#13",2],["B13","SI13",2]],
[["C6add9","DO6add9",2],["C#6add9","DO#6add9",2],["D6add9","RE6add9",2],["D#6add9","RE#6add9",2],["E6add9","MI6add9",2],["F6add9","FA6add9",2],["F#6add9","FA#6add9",2],["G6add9","SOL6add9",2],["G#6add9","SOL#6add9",2],["A6add9","LA6add9",3],["A#6add9","LA#6add9",2],["B6add9","SI6add9",2]],
[["C-5","DO-5",4],["C#-5","DO#-5",4],["D-5","RE-5",5],["D#-5","RE#-5",2],["E-5","MI-5",3],["F-5","FA-5",4],["F#-5","FA#-5",4],["G-5","SOL-5",4],["G#-5","SOL#-5",3],["A-5","LA-5",4],["A#-5","LA#-5",4],["B-5","SI-5",4]],
[["C7-5","DO7-5",3],["C#7-5","DO#7-5",2],["D7-5","RE7-5",3],["D#7-5","RE#7-5",3],["E7-5","MI7-5",3],["F7-5","FA7-5",3],["F#7-5","FA#7-5",3],["G7-5","SOL7-5",3],["G#7-5","SOL#7-5",2],["A7-5","LA7-5",4],["A#7-5","LA#7-5",3],["B7-5","SI7-5",3]],
[["C7maj5","DO7maj5",2],["C#7maj5","DO#7maj5",2],["D7maj5","RE7maj5",2],["D#7maj5","RE#7maj5",2],["E7maj5","MI7maj5",2],["F7maj5","FA7maj5",2],["F#7maj5","FA#7maj5",2],["G7maj5","SOL7maj5",2],["G#7maj5","SOL#7maj5",2],["A7maj5","LA7maj5",3],["A#7maj5","LA#7maj5",2],["B7maj5","SI7maj5",2]],
[["Cmaj9","DOmaj9",4],["C#maj9","DO#maj9",4],["Dmaj9","REmaj9",4],["D#maj9","RE#maj9",5],["Emaj9","MImaj9",4],["Fmaj9","FAmaj9",6],["F#maj9","FA#maj9",4],["Gmaj9","SOLmaj9",4],["G#maj9","SOL#maj9",4],["Amaj9","LAmaj9",3],["A#maj9","LA#maj9",4],["Bmaj9","SImaj9",3]],
[["C/E","DO/MI",1],["C/F","DO/FA",1],["C/G","DO/SOL",2],["D/F#","RE/FA#",2],["D/C","RE/DO",1],
["D/B","RE/SI",1],["D/Bb","RE/SIb",1],["D/A","RE/LA",4],["E/B","MI/SI",2],["E/C#","MI/DO#",1],
["E/D","MI/RE",1],["E/D#","MI/RE#",1],["E/F","MI/FA",2],["E/F#","MI/FA#",1],["E/G","MI/SOL",1],
["E/G#","MI/SOL#",2],["Em/B","MIm/SI",2],["Em/C#","MIm/DO#",1],["Em/D","MIm/RE",1],["Em/D#","MIm/RE#",1],
["Em/F","MIm/FA",2],["Em/F#","MIm/FA#",2],["Em/G","MIm/SOL",1],["Em/G#","MIm/SOL#",1],["F/C","FA/DO",2],
["F/D","FA/RE",1],["F/D#","FA/RE#",1],["F/E","FA/MI",1],["F/G","FA/SOL",1],["F/A","FA/LA",2],
["Fm/C","FAm/DO",1],["G/D","SOL/RE",3],["G/E","SOL/MI",1],["G/F","SOL/FA",1],["G/F#","SOL/FA#",1],
["G/B","SOL/SI",1],["Gm/D","SOLm/RE",2],["A/G#","LA/SOL#",1],["A/G","LA/SOL",1],["A/F#","LA/FA#",1],
["A/F","LA/FA",1],["A/E","LA/MI",3],["A/C#","LA/DO#",2],["Am/G#","LAm/SOL#",1],["Am/G","LAm/SOL",1],
["Am/F#","LAm/FA#",1],["Am/F","LAm/FA",1],["Am/E","LAm/MI",3],["Am/C","LAm/DO",1]]
);


var currentversion=0

var thischordversions=0

var lastchord=-1
var lastmode=-1
var lastversion=0

var currenttype=1
var lasttype=1

var notation=0

function nextversion()
  {
     lastversion=currentversion
     if(currentversion<thischordversions-1){
       currentversion++
     } else {
       currentversion=0
     }
     displaychord()
  }


function updateheading()
  {
    var list1=document.getElementById("chord")
    var list2=document.getElementById("majmin")
    var list3=document.getElementById("special")

    a=list1.selectedIndex-1
    b=list2.selectedIndex-1
    c=list3.selectedIndex-1

    version=currentversion+1


    if (list1.disabled&&c>=0){
      chordname=chordversions[22][c][notation]
      trailversion=version+" / "+thischordversions
    } else if (list3.disabled&&a>=0) {
      chordname=chordversions[b][a][notation]
      trailversion=version+" / "+thischordversions
    } else {
      chordname=""
      trailversion=""
    }

    document.getElementById("acorde").innerHTML="Acorde: "+chordname
	document.getElementById("version").innerHTML="# "+trailversion
  }



function displaychord(type)
  {
    if(type==1){
      var x = document.getElementById("chord")
      chordname = x.options[x.selectedIndex].text
      chordvalue = x.options[x.selectedIndex].value - 1
      var y = document.getElementById("majmin")
      modename = y.options[y.selectedIndex].text
      modevalue = y.options[y.selectedIndex].value - 1

    } else if (type==2){

      var x = document.getElementById("special")
      chordname = x.options[x.selectedIndex].text
      chordvalue = x.options[x.selectedIndex].value - 1

      //var y = document.getElementById("special")
      //modename = y.options[y.selectedIndex].text
      //modevalue = y.options[y.selectedIndex].value - 1
      modevalue = 22

    }


    //txt = "Mode = "+modevalue+" Chord = "+chordvalue+" Version "+currentversion
    //alert(txt)


    if (((chordvalue!=lastchord)||(modevalue!=lastmode)||(currentversion!=lastversion))&&(chordvalue>=0)&&(modevalue>=0)){
      if((chordvalue!=lastchord)||(modevalue!=lastmode)){
        currentversion=0;
      }
      lastchord=chordvalue
      lastmode=modevalue
      thischordversions=chordversions[modevalue][chordvalue][2]
      updateheading()
      var chord=new Array(6)
      chord=getchord(chordvalue,modevalue,currentversion)
      cleanfretboard()
      var chords=document.getElementById("fretboard").rows

      for (i=0 ; i<6 ; i++){
         fret=chords[i].cells
       if (chord[i]!="X") {
         wherepressed = 2 * chord[i] + 1
         //texto="Cuerda "+i+" Wherepressed = "+wherepressed
         if(wherepressed==1){
           txt="<img src=ibola.gif>"
         } else {
           txt="<img src=bola.gif>"
         }
           fret[wherepressed].innerHTML=txt
        } else {
           fret[1].innerHTML="<img src=icruz.gif>"
        }
      }

    }

}

function cleanfretboard()
{
  var chords=document.getElementById("fretboard").rows
  for (i=0 ; i<6 ; i++){
    fret=chords[i].cells
       fret[1].innerHTML="<img src=ivacio.gif>"
     for (j=3 ; j<=31 ; j=j+2){
       fret[j].innerHTML="<img src=vacio.gif>"
    }
  }

}

function hextodec(hexval)
{
   if (hexval=="A"){num=10}
   else if (hexval=="B"){num=11}
   else if (hexval=="C"){num=12}
   else if (hexval=="D"){num=13}
   else if (hexval=="E"){num=14}
   else if (hexval=="F"){num=15}
   else {num = 1 * hexval}
   return num
}

function getchord(chordvalue,modevalue,version)
{

   var chord=new Array(6)

   offset=0
   for(i=0 ; i<chordvalue ; i++) {
     offset=offset+chordversions[modevalue][i][2]
   }

   for(i=0 ; i<6 ; i++){
     absversion=offset+version
     subchord = chordtable[modevalue][absversion].substr(i,1)
     if (subchord!="X"){
        chord[i] = hextodec(subchord);
     } else {
        chord[i] = subchord;
     }
   }
   return chord

}

function toggletype(type)
{

  if (type!=currenttype){
    a=document.getElementById("chord")
    b=document.getElementById("majmin")
    c=document.getElementById("special")
    a.selectedIndex=0
    b.selectedIndex=0
    c.selectedIndex=0

    if (type==1) {
	  a.disabled=false
      b.disabled=false
      c.disabled=true
	  $('#chord,#majmin').parent().toggle("slide",function(){$('#special').parent().toggle("slide");});
    } else if (type==2) {
	  a.disabled=true
      b.disabled=true
      c.disabled=false
	  $('#special').parent().toggle("slide",function(){$('#chord,#majmin').parent().toggle("slide");});
	}
	  
	
    currentversion=0
    cleanfretboard()
    updateheading()
    currenttype=type
  }
}

function togglenotation()
{
  var list1=document.getElementById("chord")
  var list2=document.getElementById("special")
  var button=document.getElementById("bt_not")

  if(notation==0){
    list1.options[1].text="DO"
    list1.options[2].text="DO#/REb"
    list1.options[3].text="RE"
    list1.options[4].text="RE#/MIb"
    list1.options[5].text="MI"
    list1.options[6].text="FA"
    list1.options[7].text="FA#/SOLb"
    list1.options[8].text="SOL"
    list1.options[9].text="SOL#/LAb"
    list1.options[10].text="LA"
    list1.options[11].text="LA#/SIb"
    list1.options[12].text="SI"

    list2.options[1].text="DO/MI"
    list2.options[2].text="DO/FA"
    list2.options[3].text="DO/SOL"
    list2.options[4].text="RE/FA#"
    list2.options[5].text="RE/DO"
    list2.options[6].text="RE/SI"
    list2.options[7].text="RE/SIb"
    list2.options[8].text="RE/LA"
    list2.options[9].text="MI/SI"
    list2.options[10].text="MI/DO#"
    list2.options[11].text="MI/RE"
    list2.options[12].text="MI/RE#"
    list2.options[13].text="MI/FA"
    list2.options[14].text="MI/FA#"
    list2.options[15].text="MI/SOL"
    list2.options[16].text="MI/SOL#"
    list2.options[17].text="MIm/SI"
    list2.options[18].text="MIm/DO#"
    list2.options[19].text="MIm/RE"
    list2.options[20].text="MIm/RE#"
    list2.options[21].text="MIm/FA"
    list2.options[22].text="MIm/FA#"
    list2.options[23].text="MIm/SOL"
    list2.options[24].text="MIm/SOL#"
    list2.options[25].text="FA/DO"
    list2.options[26].text="FA/RE"
    list2.options[27].text="FA/RE#"
    list2.options[28].text="FA/MI"
    list2.options[29].text="FA/SOL"
    list2.options[30].text="FA/LA"
    list2.options[31].text="FAm/DO"
    list2.options[32].text="SOL/RE"
    list2.options[33].text="SOL/MI"
    list2.options[34].text="SOL/FA"
    list2.options[35].text="SOL/FA#"
    list2.options[36].text="SOL/SI"
    list2.options[37].text="SOLm/RE"
    list2.options[38].text="LA/SOL#"
    list2.options[39].text="LA/SOL"
    list2.options[40].text="LA/FA#"
    list2.options[41].text="LA/FA"
    list2.options[42].text="LA/MI"
    list2.options[43].text="LA/DO#"
    list2.options[44].text="LAm/SOL#"
    list2.options[45].text="LAm/SOL"
    list2.options[46].text="LAm/FA#"
    list2.options[47].text="LAm/FA"
    list2.options[48].text="LAm/MI"
    list2.options[49].text="LAm/DO"

    notation=1
    button.value="Notaci�n Inglesa"
    button.size=300;

  } else {


    list1.options[1].text="C"
    list1.options[2].text="C#/Db"
    list1.options[3].text="D"
    list1.options[4].text="D#/Eb"
    list1.options[5].text="E"
    list1.options[6].text="F"
    list1.options[7].text="F#/Gb"
    list1.options[8].text="G"
    list1.options[9].text="G#/Ab"
    list1.options[10].text="A"
    list1.options[11].text="A#/Bb"
    list1.options[12].text="B"

    list2.options[1].text="C/E"
    list2.options[2].text="C/F"
    list2.options[3].text="C/G"
    list2.options[4].text="D/F#"
    list2.options[5].text="D/C"
    list2.options[6].text="D/B"
    list2.options[7].text="D/Bb"
    list2.options[8].text="D/A"
    list2.options[9].text="E/B"
    list2.options[10].text="E/C#"
    list2.options[11].text="E/D"
    list2.options[12].text="E/D#"
    list2.options[13].text="E/F"
    list2.options[14].text="E/F#"
    list2.options[15].text="E/G"
    list2.options[16].text="E/G#"
    list2.options[17].text="Em/B"
    list2.options[18].text="Em/C#"
    list2.options[19].text="Em/D"
    list2.options[20].text="Em/D#"
    list2.options[21].text="Em/F"
    list2.options[22].text="Em/F#"
    list2.options[23].text="Em/G"
    list2.options[24].text="Em/G#"
    list2.options[25].text="F/C"
    list2.options[26].text="F/D"
    list2.options[27].text="F/D#"
    list2.options[28].text="F/E"
    list2.options[29].text="F/G"
    list2.options[30].text="F/A"
    list2.options[31].text="Fm/C"
    list2.options[32].text="G/D"
    list2.options[33].text="G/E"
    list2.options[34].text="G/F"
    list2.options[35].text="G/F#"
    list2.options[36].text="G/B"
    list2.options[37].text="Gm/D"
    list2.options[38].text="A/G#"
    list2.options[39].text="A/G"
    list2.options[40].text="A/F#"
    list2.options[41].text="A/F"
    list2.options[42].text="A/E"
    list2.options[43].text="A/C#"
    list2.options[44].text="Am/G#"
    list2.options[45].text="Am/G"
    list2.options[46].text="Am/F#"
    list2.options[47].text="Am/F"
    list2.options[48].text="Am/E"
    list2.options[49].text="Am/C"
    notation=0
    button.value="Notaci�n Latina"
    button.size=300;

  }

  updateheading()

}
