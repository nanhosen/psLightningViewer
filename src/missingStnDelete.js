
const fireSeasonRanStns = [100101,100711,101312,101805,102709,103704,119501,120201,146501,152001,201002,20108,20209,20212,20402,210709,21206,21502,228202,239102,240112,241507,241802,241910,242303,242907,243002,243906,244705,245106,245501,260208,260315,260804,261603,261705,270301,281501,291101,292301,292702,292904,300411,31201,313902,319505,322701,323536,338401,347701,350604,351502,352109,352550,352920,353343,353612,361002,370450,393506,393801,40312,40425,40516,40611,40714,40723,41015,41302,41806,420705,420911,421806,422610,422712,43402,43502,43605,43709,44301,44510,44804,450306,45203,452030,452306,45302,453201,453412,45421,45604,45707,464203,470302,481002,481307,481410,482102,500309,500416,500623,500735,500751,500942,500949,500956,501028,50505,51404,54801,55901,82001]
const eaStns = [201512,210709,212201,470302,471301,473901,201002,200103,202902,203802,136101,239102,236902,119501,112001,120201,125701,338401,337301,361002,360991,464203,463301,281501,280191,70052,180701,270301,430501,300411,300171,370450,192701,172501,201512,470302,201002,270301,300411,239102,119501,338401,464203,370450,120201,361002,281501]
const allWimsStns = [20227,20226,20109,103902,103205,101710,104103,103903,103403,101223,101220,103208,260505,260202,260314,260701,260503,260114,261404,422604,420805,421408,422002,420705,421305,421502,421501,421904,421416,480708,481307,481208,261710,102709,422803,260312,43702,102401,101809,260810,102712,470302,201002,270301,292301,240112,245501,323536,500623,500949,41015,43402,40312,51404,393506,50505,54801,393801,146501,45203,45421,45604,45707,313902,152001,31201,353343,453201,210709,125701,430501,420706,20223,20217,103703,102802,104105,101303,101312,101805,101044,102906,103210,102907,103209,260310,260603,260601,260203,261204,261702,260305,260809,422903,422711,422203,421702,420403,421807,421602,421405,422608,421806,420908,480707,481309,422710,41302,20113,420912,421415,260501,260116,103103,244004,420206,261408,239102,338401,361002,464203,281501,20209,21206,20212,243002,244705,242303,245106,243906,322701,500942,500735,40723,40425,481410,481002,44510,45302,319505,418802,228202,352109,450306,453412,300171,212201,471301,136101,236902,112001,337301,360991,463301,280191,172501,20114,20107,20108,42802,101905,101221,101801,104006,101817,101804,103904,101314,101315,102301,101310,101109,104004,101108,260804,260110,261608,260204,261708,260504,260402,260306,260315,260208,420911,421805,422606,423106,422712,421905,422805,421301,481302,481306,102105,420703,43707,102004,420914,421307,103102,103211,422610,260117,104106,120201,370450,20402,292904,291101,100101,241507,242907,501028,43502,40611,55901,482102,43605,43709,44301,417103,347701,350604,352550,192701,473901,202902,203802,20224,20117,40724,260207,53808,103207,101402,103704,102711,104203,102106,101812,101222,104104,101311,101708,260807,260805,261603,261406,261604,261705,260309,260308,260206,422806,422102,421304,422502,422807,421101,422902,421103,420901,102903,101316,420915,260108,422609,422808,422503,480709,261711,422611,119501,300411,21502,292702,100711,241802,241910,290702,500416,500309,500751,500956,353230,40516,41806,40714,44804,82001,351502,352920,353612,452030,452306,200103,180701]
const allWimsHasMaxDate = [420705,481307,102709,470302,201002,270301,292301,240112,245501,323536,500623,500949,41015,43402,40312,51404,393506,50505,54801,393801,146501,45203,45421,45604,45707,313902,152001,31201,353343,453201,210709,125701,430501,101312,101805,421806,41302,239102,338401,361002,464203,281501,20209,21206,20212,243002,244705,242303,245106,243906,322701,500942,500735,40723,40425,481410,481002,44510,45302,319505,418802,228202,352109,450306,453412,300171,212201,471301,136101,236902,112001,337301,360991,463301,280191,172501,103704,261603,261705,119501,300411,21502,292702,100711,241802,241910,290702,500416,500309,500751,500956,40516,41806,40714,44804,82001,351502,352920,353612,452030,452306,200103,180701,20108,260804,260315,260208,420911,422712,422610,120201,370450,20402,292904,291101,100101,241507,242907,501028,43502,40611,55901,482102,43605,43709,44301,417103,347701,350604,352550,192701,473901,202902,203802]

const testnFn = ()=> {
  const missing = eaStns.filter(stn =>{
  	if(allWimsHasMaxDate.indexOf(stn)<0){
  		return stn
  	}
  })
  console.log('missing', missing)
}

testnFn()



