const fs = require('fs');

function anonymous(input
) {
return [1/(1+1/Math.exp((-1.651548147201538-11.255953788757324*1/(1+1/Math.exp((-13.406255722045898+17.061176300048828*1/(1+1/Math.exp((10.934748649597168-3.057626724243164*(input[0]||0)-3.3396222591400146*(input[1]||0)-3.1671810150146484*(input[2]||0)-3.0624709129333496*(input[3]||0)-4.651629447937012*(input[4]||0)-2.858886957168579*(input[5]||0)-3.226202964782715*(input[6]||0)-3.4353225231170654*(input[7]||0)-3.078042507171631*(input[8]||0))))-4.4464802742004395*1/(1+1/Math.exp((-1.6794365644454956+7.1528639793396*(input[0]||0)+9.665966987609863*(input[1]||0)+6.852002143859863*(input[2]||0)-8.779422760009766*(input[3]||0)-7.733400821685791*(input[4]||0)-8.459089279174805*(input[5]||0)-7.232589244842529*(input[6]||0)-6.201669692993164*(input[7]||0)-7.571605682373047*(input[8]||0))))-2.2369167804718018*1/(1+1/Math.exp((3.1695716381073-1.4096319675445557*(input[0]||0)-1.3609709739685059*(input[1]||0)-1.2771008014678955*(input[2]||0)+1.181511402130127*(input[3]||0)-1.7668265104293823*(input[4]||0)+1.1691769361495972*(input[5]||0)-1.4183636903762817*(input[6]||0)-1.303119421005249*(input[7]||0)-1.515061855316162*(input[8]||0))))-10.309882164001465*1/(1+1/Math.exp((-13.995521545410156+3.6618146896362305*(input[0]||0)+3.6476681232452393*(input[1]||0)+3.7287445068359375*(input[2]||0)+3.132103443145752*(input[3]||0)-2.129512071609497*(input[4]||0)+2.971431016921997*(input[5]||0)+3.7438082695007324*(input[6]||0)+3.732103109359741*(input[7]||0)+3.471292734146118*(input[8]||0))))-1.314934253692627*1/(1+1/Math.exp((2.71716570854187+3.4665207862854004*(input[0]||0)+2.90255069732666*(input[1]||0)-1.815446376800537*(input[2]||0)-3.4308526515960693*(input[3]||0)+5.1011552810668945*(input[4]||0)+4.12882661819458*(input[5]||0)+3.2624363899230957*(input[6]||0)-1.0343044996261597*(input[7]||0)+4.872805118560791*(input[8]||0))))-0.6906026005744934*1/(1+1/Math.exp((-2.9992763996124268+2.4756829738616943*(input[0]||0)-3.5319900512695312*(input[1]||0)-4.411570072174072*(input[2]||0)-2.6557555198669434*(input[3]||0)-2.906632423400879*(input[4]||0)-4.079047679901123*(input[5]||0)-3.822622299194336*(input[6]||0)-4.0687255859375*(input[7]||0)+15.134729385375977*(input[8]||0))))+4.293890953063965*1/(1+1/Math.exp((-0.2914329171180725+0.9379820227622986*(input[0]||0)+9.237652778625488*(input[1]||0)+1.0580272674560547*(input[2]||0)-6.890138149261475*(input[3]||0)-6.877614498138428*(input[4]||0)-7.101923942565918*(input[5]||0)-6.848036289215088*(input[6]||0)-6.622211933135986*(input[7]||0)-7.261988162994385*(input[8]||0))))+0.003439676947891712*1/(1+1/Math.exp((7.897705078125+3.1120994091033936*(input[0]||0)+3.132143497467041*(input[1]||0)+2.8120713233947754*(input[2]||0)-9.68476676940918*(input[3]||0)-8.347956657409668*(input[4]||0)-9.441024780273438*(input[5]||0)+2.9679579734802246*(input[6]||0)+3.2161107063293457*(input[7]||0)+2.980424404144287*(input[8]||0)))))))-11.424951553344727*1/(1+1/Math.exp((-3.7703802585601807+3.6121814250946045*1/(1+1/Math.exp((10.934748649597168-3.057626724243164*(input[0]||0)-3.3396222591400146*(input[1]||0)-3.1671810150146484*(input[2]||0)-3.0624709129333496*(input[3]||0)-4.651629447937012*(input[4]||0)-2.858886957168579*(input[5]||0)-3.226202964782715*(input[6]||0)-3.4353225231170654*(input[7]||0)-3.078042507171631*(input[8]||0))))-7.95836877822876*1/(1+1/Math.exp((-1.6794365644454956+7.1528639793396*(input[0]||0)+9.665966987609863*(input[1]||0)+6.852002143859863*(input[2]||0)-8.779422760009766*(input[3]||0)-7.733400821685791*(input[4]||0)-8.459089279174805*(input[5]||0)-7.232589244842529*(input[6]||0)-6.201669692993164*(input[7]||0)-7.571605682373047*(input[8]||0))))-8.547985076904297*1/(1+1/Math.exp((3.1695716381073-1.4096319675445557*(input[0]||0)-1.3609709739685059*(input[1]||0)-1.2771008014678955*(input[2]||0)+1.181511402130127*(input[3]||0)-1.7668265104293823*(input[4]||0)+1.1691769361495972*(input[5]||0)-1.4183636903762817*(input[6]||0)-1.303119421005249*(input[7]||0)-1.515061855316162*(input[8]||0))))+15.248059272766113*1/(1+1/Math.exp((-13.995521545410156+3.6618146896362305*(input[0]||0)+3.6476681232452393*(input[1]||0)+3.7287445068359375*(input[2]||0)+3.132103443145752*(input[3]||0)-2.129512071609497*(input[4]||0)+2.971431016921997*(input[5]||0)+3.7438082695007324*(input[6]||0)+3.732103109359741*(input[7]||0)+3.471292734146118*(input[8]||0))))-2.4706530570983887*1/(1+1/Math.exp((2.71716570854187+3.4665207862854004*(input[0]||0)+2.90255069732666*(input[1]||0)-1.815446376800537*(input[2]||0)-3.4308526515960693*(input[3]||0)+5.1011552810668945*(input[4]||0)+4.12882661819458*(input[5]||0)+3.2624363899230957*(input[6]||0)-1.0343044996261597*(input[7]||0)+4.872805118560791*(input[8]||0))))+0.3110247850418091*1/(1+1/Math.exp((-2.9992763996124268+2.4756829738616943*(input[0]||0)-3.5319900512695312*(input[1]||0)-4.411570072174072*(input[2]||0)-2.6557555198669434*(input[3]||0)-2.906632423400879*(input[4]||0)-4.079047679901123*(input[5]||0)-3.822622299194336*(input[6]||0)-4.0687255859375*(input[7]||0)+15.134729385375977*(input[8]||0))))-2.191038131713867*1/(1+1/Math.exp((-0.2914329171180725+0.9379820227622986*(input[0]||0)+9.237652778625488*(input[1]||0)+1.0580272674560547*(input[2]||0)-6.890138149261475*(input[3]||0)-6.877614498138428*(input[4]||0)-7.101923942565918*(input[5]||0)-6.848036289215088*(input[6]||0)-6.622211933135986*(input[7]||0)-7.261988162994385*(input[8]||0))))-5.631892681121826*1/(1+1/Math.exp((7.897705078125+3.1120994091033936*(input[0]||0)+3.132143497467041*(input[1]||0)+2.8120713233947754*(input[2]||0)-9.68476676940918*(input[3]||0)-8.347956657409668*(input[4]||0)-9.441024780273438*(input[5]||0)+2.9679579734802246*(input[6]||0)+3.2161107063293457*(input[7]||0)+2.980424404144287*(input[8]||0)))))))+6.910836696624756*1/(1+1/Math.exp((-7.786246299743652-4.27278995513916*1/(1+1/Math.exp((10.934748649597168-3.057626724243164*(input[0]||0)-3.3396222591400146*(input[1]||0)-3.1671810150146484*(input[2]||0)-3.0624709129333496*(input[3]||0)-4.651629447937012*(input[4]||0)-2.858886957168579*(input[5]||0)-3.226202964782715*(input[6]||0)-3.4353225231170654*(input[7]||0)-3.078042507171631*(input[8]||0))))-0.04803187772631645*1/(1+1/Math.exp((-1.6794365644454956+7.1528639793396*(input[0]||0)+9.665966987609863*(input[1]||0)+6.852002143859863*(input[2]||0)-8.779422760009766*(input[3]||0)-7.733400821685791*(input[4]||0)-8.459089279174805*(input[5]||0)-7.232589244842529*(input[6]||0)-6.201669692993164*(input[7]||0)-7.571605682373047*(input[8]||0))))+8.734018325805664*1/(1+1/Math.exp((3.1695716381073-1.4096319675445557*(input[0]||0)-1.3609709739685059*(input[1]||0)-1.2771008014678955*(input[2]||0)+1.181511402130127*(input[3]||0)-1.7668265104293823*(input[4]||0)+1.1691769361495972*(input[5]||0)-1.4183636903762817*(input[6]||0)-1.303119421005249*(input[7]||0)-1.515061855316162*(input[8]||0))))-1.5042225122451782*1/(1+1/Math.exp((-13.995521545410156+3.6618146896362305*(input[0]||0)+3.6476681232452393*(input[1]||0)+3.7287445068359375*(input[2]||0)+3.132103443145752*(input[3]||0)-2.129512071609497*(input[4]||0)+2.971431016921997*(input[5]||0)+3.7438082695007324*(input[6]||0)+3.732103109359741*(input[7]||0)+3.471292734146118*(input[8]||0))))-0.3570784628391266*1/(1+1/Math.exp((2.71716570854187+3.4665207862854004*(input[0]||0)+2.90255069732666*(input[1]||0)-1.815446376800537*(input[2]||0)-3.4308526515960693*(input[3]||0)+5.1011552810668945*(input[4]||0)+4.12882661819458*(input[5]||0)+3.2624363899230957*(input[6]||0)-1.0343044996261597*(input[7]||0)+4.872805118560791*(input[8]||0))))-0.7875010967254639*1/(1+1/Math.exp((-2.9992763996124268+2.4756829738616943*(input[0]||0)-3.5319900512695312*(input[1]||0)-4.411570072174072*(input[2]||0)-2.6557555198669434*(input[3]||0)-2.906632423400879*(input[4]||0)-4.079047679901123*(input[5]||0)-3.822622299194336*(input[6]||0)-4.0687255859375*(input[7]||0)+15.134729385375977*(input[8]||0))))+2.452730417251587*1/(1+1/Math.exp((-0.2914329171180725+0.9379820227622986*(input[0]||0)+9.237652778625488*(input[1]||0)+1.0580272674560547*(input[2]||0)-6.890138149261475*(input[3]||0)-6.877614498138428*(input[4]||0)-7.101923942565918*(input[5]||0)-6.848036289215088*(input[6]||0)-6.622211933135986*(input[7]||0)-7.261988162994385*(input[8]||0))))-1.6120097637176514*1/(1+1/Math.exp((7.897705078125+3.1120994091033936*(input[0]||0)+3.132143497467041*(input[1]||0)+2.8120713233947754*(input[2]||0)-9.68476676940918*(input[3]||0)-8.347956657409668*(input[4]||0)-9.441024780273438*(input[5]||0)+2.9679579734802246*(input[6]||0)+3.2161107063293457*(input[7]||0)+2.980424404144287*(input[8]||0)))))))+8.510148048400879*1/(1+1/Math.exp((0.5593791604042053-19.65386199951172*1/(1+1/Math.exp((10.934748649597168-3.057626724243164*(input[0]||0)-3.3396222591400146*(input[1]||0)-3.1671810150146484*(input[2]||0)-3.0624709129333496*(input[3]||0)-4.651629447937012*(input[4]||0)-2.858886957168579*(input[5]||0)-3.226202964782715*(input[6]||0)-3.4353225231170654*(input[7]||0)-3.078042507171631*(input[8]||0))))+1.4220999479293823*1/(1+1/Math.exp((-1.6794365644454956+7.1528639793396*(input[0]||0)+9.665966987609863*(input[1]||0)+6.852002143859863*(input[2]||0)-8.779422760009766*(input[3]||0)-7.733400821685791*(input[4]||0)-8.459089279174805*(input[5]||0)-7.232589244842529*(input[6]||0)-6.201669692993164*(input[7]||0)-7.571605682373047*(input[8]||0))))-6.40799617767334*1/(1+1/Math.exp((3.1695716381073-1.4096319675445557*(input[0]||0)-1.3609709739685059*(input[1]||0)-1.2771008014678955*(input[2]||0)+1.181511402130127*(input[3]||0)-1.7668265104293823*(input[4]||0)+1.1691769361495972*(input[5]||0)-1.4183636903762817*(input[6]||0)-1.303119421005249*(input[7]||0)-1.515061855316162*(input[8]||0))))+5.04889440536499*1/(1+1/Math.exp((-13.995521545410156+3.6618146896362305*(input[0]||0)+3.6476681232452393*(input[1]||0)+3.7287445068359375*(input[2]||0)+3.132103443145752*(input[3]||0)-2.129512071609497*(input[4]||0)+2.971431016921997*(input[5]||0)+3.7438082695007324*(input[6]||0)+3.732103109359741*(input[7]||0)+3.471292734146118*(input[8]||0))))+4.648784637451172*1/(1+1/Math.exp((2.71716570854187+3.4665207862854004*(input[0]||0)+2.90255069732666*(input[1]||0)-1.815446376800537*(input[2]||0)-3.4308526515960693*(input[3]||0)+5.1011552810668945*(input[4]||0)+4.12882661819458*(input[5]||0)+3.2624363899230957*(input[6]||0)-1.0343044996261597*(input[7]||0)+4.872805118560791*(input[8]||0))))+0.829468309879303*1/(1+1/Math.exp((-2.9992763996124268+2.4756829738616943*(input[0]||0)-3.5319900512695312*(input[1]||0)-4.411570072174072*(input[2]||0)-2.6557555198669434*(input[3]||0)-2.906632423400879*(input[4]||0)-4.079047679901123*(input[5]||0)-3.822622299194336*(input[6]||0)-4.0687255859375*(input[7]||0)+15.134729385375977*(input[8]||0))))-5.107918739318848*1/(1+1/Math.exp((-0.2914329171180725+0.9379820227622986*(input[0]||0)+9.237652778625488*(input[1]||0)+1.0580272674560547*(input[2]||0)-6.890138149261475*(input[3]||0)-6.877614498138428*(input[4]||0)-7.101923942565918*(input[5]||0)-6.848036289215088*(input[6]||0)-6.622211933135986*(input[7]||0)-7.261988162994385*(input[8]||0))))-3.3469340801239014*1/(1+1/Math.exp((7.897705078125+3.1120994091033936*(input[0]||0)+3.132143497467041*(input[1]||0)+2.8120713233947754*(input[2]||0)-9.68476676940918*(input[3]||0)-8.347956657409668*(input[4]||0)-9.441024780273438*(input[5]||0)+2.9679579734802246*(input[6]||0)+3.2161107063293457*(input[7]||0)+2.980424404144287*(input[8]||0)))))))+7.148355007171631*1/(1+1/Math.exp((-7.826486110687256-20.65848731994629*1/(1+1/Math.exp((10.934748649597168-3.057626724243164*(input[0]||0)-3.3396222591400146*(input[1]||0)-3.1671810150146484*(input[2]||0)-3.0624709129333496*(input[3]||0)-4.651629447937012*(input[4]||0)-2.858886957168579*(input[5]||0)-3.226202964782715*(input[6]||0)-3.4353225231170654*(input[7]||0)-3.078042507171631*(input[8]||0))))+1.600258469581604*1/(1+1/Math.exp((-1.6794365644454956+7.1528639793396*(input[0]||0)+9.665966987609863*(input[1]||0)+6.852002143859863*(input[2]||0)-8.779422760009766*(input[3]||0)-7.733400821685791*(input[4]||0)-8.459089279174805*(input[5]||0)-7.232589244842529*(input[6]||0)-6.201669692993164*(input[7]||0)-7.571605682373047*(input[8]||0))))+16.98504066467285*1/(1+1/Math.exp((3.1695716381073-1.4096319675445557*(input[0]||0)-1.3609709739685059*(input[1]||0)-1.2771008014678955*(input[2]||0)+1.181511402130127*(input[3]||0)-1.7668265104293823*(input[4]||0)+1.1691769361495972*(input[5]||0)-1.4183636903762817*(input[6]||0)-1.303119421005249*(input[7]||0)-1.515061855316162*(input[8]||0))))+5.274707794189453*1/(1+1/Math.exp((-13.995521545410156+3.6618146896362305*(input[0]||0)+3.6476681232452393*(input[1]||0)+3.7287445068359375*(input[2]||0)+3.132103443145752*(input[3]||0)-2.129512071609497*(input[4]||0)+2.971431016921997*(input[5]||0)+3.7438082695007324*(input[6]||0)+3.732103109359741*(input[7]||0)+3.471292734146118*(input[8]||0))))-0.4693810045719147*1/(1+1/Math.exp((2.71716570854187+3.4665207862854004*(input[0]||0)+2.90255069732666*(input[1]||0)-1.815446376800537*(input[2]||0)-3.4308526515960693*(input[3]||0)+5.1011552810668945*(input[4]||0)+4.12882661819458*(input[5]||0)+3.2624363899230957*(input[6]||0)-1.0343044996261597*(input[7]||0)+4.872805118560791*(input[8]||0))))+1.2260040044784546*1/(1+1/Math.exp((-2.9992763996124268+2.4756829738616943*(input[0]||0)-3.5319900512695312*(input[1]||0)-4.411570072174072*(input[2]||0)-2.6557555198669434*(input[3]||0)-2.906632423400879*(input[4]||0)-4.079047679901123*(input[5]||0)-3.822622299194336*(input[6]||0)-4.0687255859375*(input[7]||0)+15.134729385375977*(input[8]||0))))-10.757402420043945*1/(1+1/Math.exp((-0.2914329171180725+0.9379820227622986*(input[0]||0)+9.237652778625488*(input[1]||0)+1.0580272674560547*(input[2]||0)-6.890138149261475*(input[3]||0)-6.877614498138428*(input[4]||0)-7.101923942565918*(input[5]||0)-6.848036289215088*(input[6]||0)-6.622211933135986*(input[7]||0)-7.261988162994385*(input[8]||0))))+5.782118797302246*1/(1+1/Math.exp((7.897705078125+3.1120994091033936*(input[0]||0)+3.132143497467041*(input[1]||0)+2.8120713233947754*(input[2]||0)-9.68476676940918*(input[3]||0)-8.347956657409668*(input[4]||0)-9.441024780273438*(input[5]||0)+2.9679579734802246*(input[6]||0)+3.2161107063293457*(input[7]||0)+2.980424404144287*(input[8]||0)))))))-15.419954299926758*1/(1+1/Math.exp((-1.4063581228256226-11.924012184143066*1/(1+1/Math.exp((10.934748649597168-3.057626724243164*(input[0]||0)-3.3396222591400146*(input[1]||0)-3.1671810150146484*(input[2]||0)-3.0624709129333496*(input[3]||0)-4.651629447937012*(input[4]||0)-2.858886957168579*(input[5]||0)-3.226202964782715*(input[6]||0)-3.4353225231170654*(input[7]||0)-3.078042507171631*(input[8]||0))))+6.931145191192627*1/(1+1/Math.exp((-1.6794365644454956+7.1528639793396*(input[0]||0)+9.665966987609863*(input[1]||0)+6.852002143859863*(input[2]||0)-8.779422760009766*(input[3]||0)-7.733400821685791*(input[4]||0)-8.459089279174805*(input[5]||0)-7.232589244842529*(input[6]||0)-6.201669692993164*(input[7]||0)-7.571605682373047*(input[8]||0))))+2.6052968502044678*1/(1+1/Math.exp((3.1695716381073-1.4096319675445557*(input[0]||0)-1.3609709739685059*(input[1]||0)-1.2771008014678955*(input[2]||0)+1.181511402130127*(input[3]||0)-1.7668265104293823*(input[4]||0)+1.1691769361495972*(input[5]||0)-1.4183636903762817*(input[6]||0)-1.303119421005249*(input[7]||0)-1.515061855316162*(input[8]||0))))+17.73259162902832*1/(1+1/Math.exp((-13.995521545410156+3.6618146896362305*(input[0]||0)+3.6476681232452393*(input[1]||0)+3.7287445068359375*(input[2]||0)+3.132103443145752*(input[3]||0)-2.129512071609497*(input[4]||0)+2.971431016921997*(input[5]||0)+3.7438082695007324*(input[6]||0)+3.732103109359741*(input[7]||0)+3.471292734146118*(input[8]||0))))+2.658674955368042*1/(1+1/Math.exp((2.71716570854187+3.4665207862854004*(input[0]||0)+2.90255069732666*(input[1]||0)-1.815446376800537*(input[2]||0)-3.4308526515960693*(input[3]||0)+5.1011552810668945*(input[4]||0)+4.12882661819458*(input[5]||0)+3.2624363899230957*(input[6]||0)-1.0343044996261597*(input[7]||0)+4.872805118560791*(input[8]||0))))+1.3596608638763428*1/(1+1/Math.exp((-2.9992763996124268+2.4756829738616943*(input[0]||0)-3.5319900512695312*(input[1]||0)-4.411570072174072*(input[2]||0)-2.6557555198669434*(input[3]||0)-2.906632423400879*(input[4]||0)-4.079047679901123*(input[5]||0)-3.822622299194336*(input[6]||0)-4.0687255859375*(input[7]||0)+15.134729385375977*(input[8]||0))))-13.84593677520752*1/(1+1/Math.exp((-0.2914329171180725+0.9379820227622986*(input[0]||0)+9.237652778625488*(input[1]||0)+1.0580272674560547*(input[2]||0)-6.890138149261475*(input[3]||0)-6.877614498138428*(input[4]||0)-7.101923942565918*(input[5]||0)-6.848036289215088*(input[6]||0)-6.622211933135986*(input[7]||0)-7.261988162994385*(input[8]||0))))-0.40286535024642944*1/(1+1/Math.exp((7.897705078125+3.1120994091033936*(input[0]||0)+3.132143497467041*(input[1]||0)+2.8120713233947754*(input[2]||0)-9.68476676940918*(input[3]||0)-8.347956657409668*(input[4]||0)-9.441024780273438*(input[5]||0)+2.9679579734802246*(input[6]||0)+3.2161107063293457*(input[7]||0)+2.980424404144287*(input[8]||0)))))))-1.1975352764129639*1/(1+1/Math.exp((2.0909392833709717-2.637465715408325*1/(1+1/Math.exp((10.934748649597168-3.057626724243164*(input[0]||0)-3.3396222591400146*(input[1]||0)-3.1671810150146484*(input[2]||0)-3.0624709129333496*(input[3]||0)-4.651629447937012*(input[4]||0)-2.858886957168579*(input[5]||0)-3.226202964782715*(input[6]||0)-3.4353225231170654*(input[7]||0)-3.078042507171631*(input[8]||0))))+8.644906997680664*1/(1+1/Math.exp((-1.6794365644454956+7.1528639793396*(input[0]||0)+9.665966987609863*(input[1]||0)+6.852002143859863*(input[2]||0)-8.779422760009766*(input[3]||0)-7.733400821685791*(input[4]||0)-8.459089279174805*(input[5]||0)-7.232589244842529*(input[6]||0)-6.201669692993164*(input[7]||0)-7.571605682373047*(input[8]||0))))-1.6237924098968506*1/(1+1/Math.exp((3.1695716381073-1.4096319675445557*(input[0]||0)-1.3609709739685059*(input[1]||0)-1.2771008014678955*(input[2]||0)+1.181511402130127*(input[3]||0)-1.7668265104293823*(input[4]||0)+1.1691769361495972*(input[5]||0)-1.4183636903762817*(input[6]||0)-1.303119421005249*(input[7]||0)-1.515061855316162*(input[8]||0))))+5.031676769256592*1/(1+1/Math.exp((-13.995521545410156+3.6618146896362305*(input[0]||0)+3.6476681232452393*(input[1]||0)+3.7287445068359375*(input[2]||0)+3.132103443145752*(input[3]||0)-2.129512071609497*(input[4]||0)+2.971431016921997*(input[5]||0)+3.7438082695007324*(input[6]||0)+3.732103109359741*(input[7]||0)+3.471292734146118*(input[8]||0))))+0.7918998003005981*1/(1+1/Math.exp((2.71716570854187+3.4665207862854004*(input[0]||0)+2.90255069732666*(input[1]||0)-1.815446376800537*(input[2]||0)-3.4308526515960693*(input[3]||0)+5.1011552810668945*(input[4]||0)+4.12882661819458*(input[5]||0)+3.2624363899230957*(input[6]||0)-1.0343044996261597*(input[7]||0)+4.872805118560791*(input[8]||0))))-2.617323160171509*1/(1+1/Math.exp((-2.9992763996124268+2.4756829738616943*(input[0]||0)-3.5319900512695312*(input[1]||0)-4.411570072174072*(input[2]||0)-2.6557555198669434*(input[3]||0)-2.906632423400879*(input[4]||0)-4.079047679901123*(input[5]||0)-3.822622299194336*(input[6]||0)-4.0687255859375*(input[7]||0)+15.134729385375977*(input[8]||0))))-3.761146306991577*1/(1+1/Math.exp((-0.2914329171180725+0.9379820227622986*(input[0]||0)+9.237652778625488*(input[1]||0)+1.0580272674560547*(input[2]||0)-6.890138149261475*(input[3]||0)-6.877614498138428*(input[4]||0)-7.101923942565918*(input[5]||0)-6.848036289215088*(input[6]||0)-6.622211933135986*(input[7]||0)-7.261988162994385*(input[8]||0))))-7.788825988769531*1/(1+1/Math.exp((7.897705078125+3.1120994091033936*(input[0]||0)+3.132143497467041*(input[1]||0)+2.8120713233947754*(input[2]||0)-9.68476676940918*(input[3]||0)-8.347956657409668*(input[4]||0)-9.441024780273438*(input[5]||0)+2.9679579734802246*(input[6]||0)+3.2161107063293457*(input[7]||0)+2.980424404144287*(input[8]||0)))))))+1.0272291898727417*1/(1+1/Math.exp((-2.2440526485443115-4.262328147888184*1/(1+1/Math.exp((10.934748649597168-3.057626724243164*(input[0]||0)-3.3396222591400146*(input[1]||0)-3.1671810150146484*(input[2]||0)-3.0624709129333496*(input[3]||0)-4.651629447937012*(input[4]||0)-2.858886957168579*(input[5]||0)-3.226202964782715*(input[6]||0)-3.4353225231170654*(input[7]||0)-3.078042507171631*(input[8]||0))))-1.0309563875198364*1/(1+1/Math.exp((-1.6794365644454956+7.1528639793396*(input[0]||0)+9.665966987609863*(input[1]||0)+6.852002143859863*(input[2]||0)-8.779422760009766*(input[3]||0)-7.733400821685791*(input[4]||0)-8.459089279174805*(input[5]||0)-7.232589244842529*(input[6]||0)-6.201669692993164*(input[7]||0)-7.571605682373047*(input[8]||0))))+0.9460997581481934*1/(1+1/Math.exp((3.1695716381073-1.4096319675445557*(input[0]||0)-1.3609709739685059*(input[1]||0)-1.2771008014678955*(input[2]||0)+1.181511402130127*(input[3]||0)-1.7668265104293823*(input[4]||0)+1.1691769361495972*(input[5]||0)-1.4183636903762817*(input[6]||0)-1.303119421005249*(input[7]||0)-1.515061855316162*(input[8]||0))))-3.2236874103546143*1/(1+1/Math.exp((-13.995521545410156+3.6618146896362305*(input[0]||0)+3.6476681232452393*(input[1]||0)+3.7287445068359375*(input[2]||0)+3.132103443145752*(input[3]||0)-2.129512071609497*(input[4]||0)+2.971431016921997*(input[5]||0)+3.7438082695007324*(input[6]||0)+3.732103109359741*(input[7]||0)+3.471292734146118*(input[8]||0))))-1.9980618953704834*1/(1+1/Math.exp((2.71716570854187+3.4665207862854004*(input[0]||0)+2.90255069732666*(input[1]||0)-1.815446376800537*(input[2]||0)-3.4308526515960693*(input[3]||0)+5.1011552810668945*(input[4]||0)+4.12882661819458*(input[5]||0)+3.2624363899230957*(input[6]||0)-1.0343044996261597*(input[7]||0)+4.872805118560791*(input[8]||0))))-1.9613213539123535*1/(1+1/Math.exp((-2.9992763996124268+2.4756829738616943*(input[0]||0)-3.5319900512695312*(input[1]||0)-4.411570072174072*(input[2]||0)-2.6557555198669434*(input[3]||0)-2.906632423400879*(input[4]||0)-4.079047679901123*(input[5]||0)-3.822622299194336*(input[6]||0)-4.0687255859375*(input[7]||0)+15.134729385375977*(input[8]||0))))+2.0459415912628174*1/(1+1/Math.exp((-0.2914329171180725+0.9379820227622986*(input[0]||0)+9.237652778625488*(input[1]||0)+1.0580272674560547*(input[2]||0)-6.890138149261475*(input[3]||0)-6.877614498138428*(input[4]||0)-7.101923942565918*(input[5]||0)-6.848036289215088*(input[6]||0)-6.622211933135986*(input[7]||0)-7.261988162994385*(input[8]||0))))-0.936148464679718*1/(1+1/Math.exp((7.897705078125+3.1120994091033936*(input[0]||0)+3.132143497467041*(input[1]||0)+2.8120713233947754*(input[2]||0)-9.68476676940918*(input[3]||0)-8.347956657409668*(input[4]||0)-9.441024780273438*(input[5]||0)+2.9679579734802246*(input[6]||0)+3.2161107063293457*(input[7]||0)+2.980424404144287*(input[8]||0))))))))))];
};

class Game {
  moveNumber = 0;
  level = 0;

  constructor(maxDepth = Number.MAX_SAFE_INTEGER) {
    this.data = Array(9).fill("");
    this.player = "X";
    this.maxDepth = maxDepth
  }

  getId() {
    return this.data.join(",");
  }

  move(x, y) {
    const squareOcupied = y !== undefined ? this.data[y * 3 + x] : this.data[x];
    if (squareOcupied || this.checkWinner() !== undefined) {
      throw new Error("illegal move");
    }
    this.level += 1;
    this.moveNumber++;
    if (y !== undefined) {
      this.data[y * 3 + x] = this.player;
    } else {
      this.data[x] = this.player;
    }
    this.togglePlayer();
    this.gameId = this.getId();
  }

  isFinished() {
    return this.moveNumber === 9;
  }

  checkWinner(player) {
    const winningCellCombinations = [
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagnol
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCellCombinations) {
      const string = combination.map((index) => this.data[index]).join("");
      if (/(X{3}|O{3})/.test(string)) {
        return (1 / this.level) * (string[0] === player ? 1 : -1);
      }
    }

    if (this.isFinished()) {
      return 0;
    }
    return;
  }

  togglePlayer() {
    this.player = this.player === "X" ? "O" : "X";
  }

  toString() {
    return this.data
      .map((c, i) => (i % 3 === 0 ? "\n" : "") + (c || "."))
      .join("");
  }

  print() {
    console.log(this.toString());
  }

  clone() {
    const newGame = new Game();
    newGame.data = this.data.map((cell) => cell);
    newGame.player = this.player;
    newGame.moveNumber = this.moveNumber;
    newGame.level = this.level;
    return newGame;
  }

  nextMoves() {
    if (this.checkWinner() !== undefined) {
      return [];
    }
    const nextGameStates = [];

    this.data.forEach((cell, x) => {
      if (!cell) {
        const newGame = this.clone();
        newGame.move(x);
        // nextGameStates.push(newGame)
        if (Math.random() > 0.5) {
          nextGameStates.push(newGame);
        } else {
          nextGameStates.unshift(newGame);
        }
      }
    });

    this.children = nextGameStates;
    return nextGameStates;
  }

  getChildren() {
    return this.nextMoves();
  }

  playAiMove() {
    this.level = 0;
    minimax(this.player, this, true, this.maxDepth);
    // for (const move of this.children ?? []) {
    //   if (this.val === move.val) {
    //     this.data = move.data.slice(0);
    //     this.player = move.player;
    //     this.moveNumber++;
    //     break;
    //   }
    // }
  }

  static staticEval(data, player) {
    const otherPlayer = player === 'X' ? 'O' : 'X'

    const input = data.join(',')
    .replaceAll(player, '1')
    .replaceAll(otherPlayer, '0.5')
    .split(",")
    .map(c => +(c ?? 0))

    return anonymous(input)[0]
  }
}

function minimax(
  player,
  node,
  isMax = true,
  alpha = Number.MIN_SAFE_INTEGER,
  beta = Number.MAX_SAFE_INTEGER,
  depthLimit = Number.MAX_SAFE_INTEGER
) {
  const children = node.getChildren();
  
  if (children.length === 0) {
    const val = node.checkWinner(player);
    node.val = val;
    return val;
  } else if (depthLimit === 0) {
    node.val = Game.staticEval(node.data, node.player)
    return node.val
  } else {
    const values = [];

    for (const child of children) {
      const evaluation = minimax(player, child, !isMax, alpha, beta, depthLimit-1);
      values.push(evaluation);
      if (isMax) {
        alpha = Math.max(alpha, evaluation);
      } else {
        beta = Math.min(beta, evaluation);
      }
      // if (beta <= alpha) {
      //   break;
      // }
    }

    let val;
    if (isMax) {
      val = Math.max(...values);
    } else {
      val = Math.min(...values);
    }
    node.val = val;
    node.max = isMax;
    return val;
  }
}



function testGame() {
  let root = new Game(3)
  while (root.checkWinner() === undefined) {
    root.playAiMove()
    root.print()
  }
}

function saveData() {
  let root = new Game()
  root.playAiMove()
  const dict = {}
  function collectEvaluations(crnt, player) {
    if (crnt.val !== undefined) {
      const otherPlayer = player === 'X' ? 'O' : 'X'
      const id = crnt.getId()
      .replaceAll(player, '1')
      .replaceAll(otherPlayer, '-1')
      .split(",")
      .map(c => +(c ?? 0))
      dict[id] = crnt.val
    }
    crnt.children?.forEach(c => collectEvaluations(c, player))
  }
  collectEvaluations(root, player = 'X')
  new Game().getChildren().forEach(crnt => {
    crnt.playAiMove()
    collectEvaluations(crnt, player = 'O')
  })

  console.log(Object.keys(dict).length)
  
  fs.writeFileSync(`data-${Date.now()}.json`, JSON.stringify(dict));
}
saveData()
