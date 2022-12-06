import{S as Nt,i as St,s as Et,k as x,q as N,a as w,l as _,m as C,r as S,h as f,c as k,n as j,b as v,G as E,I as Tt,u as O,B as J}from"../../chunks/index-b4d30fc1.js";var $=(t,n)=>Array(Math.abs(n)+1).join(t);function mt(t){return t!==null&&typeof t=="object"&&typeof t.name=="string"}function at(t){return t!==null&&typeof t=="object"&&typeof t.step=="number"&&typeof t.alt=="number"}var ot=[0,2,4,-1,1,3,5],rt=ot.map(t=>Math.floor(t*7/12));function it(t){const{step:n,alt:e,oct:m,dir:a=1}=t,o=ot[n]+7*e;if(m===void 0)return[a*o];const i=m-rt[n]-4*e;return[a*o,a*i]}var xt=[3,0,4,1,5,2,6];function _t(t){const[n,e,m]=t,a=xt[Ct(n)],o=Math.floor((n+1)/7);if(e===void 0)return{step:a,alt:o,dir:m};const i=e+4*o+rt[a];return{step:a,alt:o,oct:i,dir:m}}function Ct(t){const n=(t+1)%7;return n<0?7+n:n}var st={empty:!0,name:"",pc:"",acc:""},Y=new Map,Ft=t=>"CDEFGAB".charAt(t),wt=t=>t<0?$("b",-t):$("#",t),kt=t=>t[0]==="b"?-t.length:t.length;function y(t){const n=JSON.stringify(t),e=Y.get(n);if(e)return e;const m=typeof t=="string"?It(t):at(t)?y(Ot(t)):mt(t)?y(t.name):st;return Y.set(n,m),m}var Dt=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function $t(t){const n=Dt.exec(t);return[n[1].toUpperCase(),n[2].replace(/x/g,"##"),n[3],n[4]]}function G(t){return y(_t(t))}var zt=(t,n)=>(t%n+n)%n,I=[0,2,4,5,7,9,11];function It(t){const n=$t(t);if(n[0]===""||n[3]!=="")return st;const e=n[0],m=n[1],a=n[2],o=(e.charCodeAt(0)+3)%7,i=kt(m),s=a.length?+a:void 0,P=it({step:o,alt:i,oct:s}),l=e+m+a,u=e+m,d=(I[o]+i+120)%12,p=s===void 0?zt(I[o]+i,12)-12*99:I[o]+i+12*(s+1),b=p>=0&&p<=127?p:null,h=s===void 0?null:Math.pow(2,(p-69)/12)*440;return{empty:!1,acc:m,alt:i,chroma:d,coord:P,freq:h,height:p,letter:e,midi:b,name:l,oct:s,pc:u,step:o}}function Ot(t){const{step:n,alt:e,oct:m}=t,a=Ft(n);if(!a)return"";const o=a+wt(e);return m||m===0?o+m:o}var R={empty:!0,name:"",acc:""},Gt="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Rt="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Ht=new RegExp("^"+Gt+"|"+Rt+"$");function qt(t){const n=Ht.exec(`${t}`);return n===null?["",""]:n[1]?[n[1],n[2]]:[n[4],n[3]]}var Z={};function z(t){return typeof t=="string"?Z[t]||(Z[t]=Bt(t)):at(t)?z(Ut(t)):mt(t)?z(t.name):R}var K=[0,2,4,5,7,9,11],Pt="PMMPPMM";function Bt(t){const n=qt(t);if(n[0]==="")return R;const e=+n[0],m=n[1],a=(Math.abs(e)-1)%7,o=Pt[a];if(o==="M"&&m==="P")return R;const i=o==="M"?"majorable":"perfectable",s=""+e+m,P=e<0?-1:1,l=e===8||e===-8?e:P*(a+1),u=Lt(i,m),d=Math.floor((Math.abs(e)-1)/7),p=P*(K[a]+u+12*d),b=(P*(K[a]+u)%12+12)%12,h=it({step:a,alt:u,oct:d,dir:P});return{empty:!1,name:s,num:e,q:m,step:a,alt:u,dir:P,type:i,simple:l,semitones:p,chroma:b,coord:h,oct:d}}function Lt(t,n){return n==="M"&&t==="majorable"||n==="P"&&t==="perfectable"?0:n==="m"&&t==="majorable"?-1:/^A+$/.test(n)?n.length:/^d+$/.test(n)?-1*(t==="perfectable"?n.length:n.length+1):0}function Ut(t){const{step:n,alt:e,oct:m=0,dir:a}=t;if(!a)return"";const o=n+1+7*m,i=o===0?n+1:o,s=a<0?"-":"",P=Pt[n]==="M"?"majorable":"perfectable";return s+i+Xt(P,e)}function Xt(t,n){return n===0?t==="majorable"?"M":"P":n===-1&&t==="majorable"?"m":n>0?$("A",n):$("d",t==="perfectable"?n:n+1)}function q(t,n){const e=y(t),m=z(n);if(e.empty||m.empty)return"";const a=e.coord,o=m.coord,i=a.length===1?[a[0]+o[0]]:[a[0]+o[0],a[1]+o[1]];return G(i).name}function Mt(t,n){const e=n.length,m=(t%e+e)%e;return n.slice(m,e).concat(n.slice(0,m))}var g={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},ct=t=>Number(t).toString(2),W=t=>parseInt(t,2),Vt=/^[01]{12}$/;function lt(t){return Vt.test(t)}var Qt=t=>typeof t=="number"&&t>=0&&t<=4095,Jt=t=>t&&lt(t.chroma),tt={[g.chroma]:g};function dt(t){const n=lt(t)?t:Qt(t)?ct(t):Array.isArray(t)?tn(t):Jt(t)?t.chroma:g.chroma;return tt[n]=tt[n]||Wt(n)}var Yt=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Zt(t){const n=[];for(let e=0;e<12;e++)t.charAt(e)==="1"&&n.push(Yt[e]);return n}function Kt(t){const n=t.split("");return n.map((e,m)=>Mt(m,n).join(""))}function Wt(t){const n=W(t),e=Kt(t).map(W).filter(o=>o>=2048).sort()[0],m=ct(e),a=Zt(t);return{empty:!1,name:"",setNum:n,chroma:t,normalized:m,intervals:a}}function tn(t){if(t.length===0)return g.chroma;let n;const e=[0,0,0,0,0,0,0,0,0,0,0,0];for(let m=0;m<t.length;m++)n=y(t[m]),n.empty&&(n=z(t[m])),n.empty||(e[n.chroma]=1);return e.join("")}var nn=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 \u0394 ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 \u03949 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth/ninth","6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim \xB0 o"],["1P 3m 5d 7d","diminished seventh","dim7 \xB07 o7"],["1P 3m 5d 7m","half-diminished","m7b5 \xF8 -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 \u03949#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],en=nn;({...g});var ut=[],D={};function mn(t,n,e){const m=on(t),a={...dt(t),name:e||"",quality:m,intervals:t,aliases:n};ut.push(a),a.name&&(D[a.name]=a),D[a.setNum]=a,D[a.chroma]=a,a.aliases.forEach(o=>an(a,o))}function an(t,n){D[n]=t}function on(t){const n=e=>t.indexOf(e)!==-1;return n("5A")?"Augmented":n("3M")?"Major":n("5d")?"Diminished":n("3m")?"Minor":"Unknown"}en.forEach(([t,n,e])=>mn(t.split(" "),e.split(" "),n));ut.sort((t,n)=>t.setNum-n.setNum);var rn=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neopolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5P pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7M pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neopolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neopolitan major"],["1P 2M 3m 4P 5P 6m 7m","aeolian","minor"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],sn=rn,Pn={...g,intervals:[],aliases:[]},F={};function Mn(t){return F[t]||Pn}function cn(t,n,e=[]){const m={...dt(t),name:n,intervals:t,aliases:e};return F[m.name]=m,F[m.setNum]=m,F[m.chroma]=m,m.aliases.forEach(a=>ln(m,a)),m}function ln(t,n){F[n]=t}sn.forEach(([t,n,...e])=>cn(t.split(" "),n,e));var dn=Math.log(2),un=Math.log(440);function ht(t){const n=12*(Math.log(t)-un)/dn+69;return Math.round(n*100)/100}var hn="C C# D D# E F F# G G# A A# B".split(" "),fn="C Db D Eb E F Gb G Ab A Bb B".split(" ");function T(t,n={}){if(isNaN(t)||t===-1/0||t===1/0)return"";t=Math.round(t);const m=(n.sharps===!0?hn:fn)[t%12];if(n.pitchClass)return m;const a=Math.floor(t/12)-1;return m+a}var pn=["C","D","E","F","G","A","B"],ft=t=>t.name,pt=t=>t.map(y).filter(n=>!n.empty);function An(t){return t===void 0?pn.slice():Array.isArray(t)?pt(t).map(ft):[]}var A=y,bn=t=>A(t).name,vn=t=>A(t).pc,yn=t=>A(t).acc,gn=t=>A(t).oct,jn=t=>A(t).midi,Nn=t=>A(t).freq,Sn=t=>A(t).chroma;function En(t){return T(t)}function Tn(t){return T(ht(t))}function xn(t){return T(ht(t),{sharps:!0})}function _n(t){return T(t,{sharps:!0})}var B=q,Cn=q,At=t=>n=>B(n,t),Fn=At,bt=t=>n=>B(t,n),wn=bt;function vt(t,n){const e=A(t);if(e.empty)return"";const[m,a]=e.coord;return G(a===void 0?[m+n]:[m+n,a]).name}var kn=vt,L=(t,n)=>t.height-n.height,Dn=(t,n)=>n.height-t.height;function yt(t,n){return n=n||L,pt(t).sort(n).map(ft)}function $n(t){return yt(t,L).filter((n,e,m)=>e===0||n!==m[e-1])}var zn=t=>{const n=A(t);return n.empty?"":T(n.midi||n.chroma,{sharps:n.alt>0,pitchClass:n.midi===null})};function In(t,n){const e=A(t);if(e.empty)return"";const m=A(n||T(e.midi||e.chroma,{sharps:e.alt<0,pitchClass:!0}));if(m.empty||m.chroma!==e.chroma)return"";if(e.oct===void 0)return m.pc;const a=e.chroma-e.alt,o=m.chroma-m.alt,i=a>11||o<0?-1:a<0||o>11?1:0,s=e.oct+i;return m.pc+s}var On={names:An,get:A,name:bn,pitchClass:vn,accidentals:yn,octave:gn,midi:jn,ascending:L,descending:Dn,sortedNames:yt,sortedUniqNames:$n,fromMidi:En,fromMidiSharps:_n,freq:Nn,fromFreq:Tn,fromFreqSharps:xn,chroma:Sn,transpose:B,tr:Cn,transposeBy:At,trBy:Fn,transposeFrom:bt,trFrom:wn,transposeFifths:vt,trFifths:kn,simplify:zn,enharmonic:In};Object.freeze([]);var U=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],nt={...g,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},Gn=U.map(Rn),H={};Gn.forEach(t=>{H[t.name]=t,t.aliases.forEach(n=>{H[n]=t})});function gt(t){return typeof t=="string"?H[t.toLowerCase()]||nt:t&&t.name?gt(t.name):nt}function Rn(t){const[n,e,m,a,o,i,s]=t,P=s?[s]:[],l=Number(e).toString(2);return{empty:!1,intervals:Mn(a).intervals,modeNum:n,chroma:l,normalized:l,name:a,setNum:e,alt:m,triad:o,seventh:i,aliases:P}}function jt(t){return(n,e)=>{const m=gt(n);if(m.empty)return[];const a=Mt(m.modeNum,t),o=m.intervals.map(i=>q(e,i));return a.map((i,s)=>o[s]+i)}}jt(U.map(t=>t[4]));jt(U.map(t=>t[5]));function et(t){let n,e,m;return{c(){n=x("h3"),e=N("Error: "),m=N(t[1])},l(a){n=_(a,"H3",{});var o=C(n);e=S(o,"Error: "),m=S(o,t[1]),o.forEach(f)},m(a,o){v(a,n,o),E(n,e),E(n,m)},p(a,o){o&2&&O(m,a[1])},d(a){a&&f(n)}}}function Hn(t){let n,e,m,a,o,i,s,P,l,u,d,p,b,h,c=t[1]&&et(t);return{c(){n=x("h1"),e=N("Frequency (Hz)"),m=w(),a=x("h2"),o=N(t[0]),i=w(),s=x("h2"),P=N(t[2]),l=w(),c&&c.c(),u=w(),d=x("button"),p=N("Start Pitch Detection"),this.h()},l(r){n=_(r,"H1",{class:!0});var M=C(n);e=S(M,"Frequency (Hz)"),M.forEach(f),m=k(r),a=_(r,"H2",{class:!0,id:!0});var X=C(a);o=S(X,t[0]),X.forEach(f),i=k(r),s=_(r,"H2",{class:!0,id:!0});var V=C(s);P=S(V,t[2]),V.forEach(f),l=k(r),c&&c.l(r),u=k(r),d=_(r,"BUTTON",{class:!0});var Q=C(d);p=S(Q,"Start Pitch Detection"),Q.forEach(f),this.h()},h(){j(n,"class","text-3xl font-bold underline bg-sky-500"),j(a,"class","text-3xl font-bold underline"),j(a,"id","frequency"),j(s,"class","text-3xl font-bold underline"),j(s,"id","notatiom"),j(d,"class","dark:md:hover:bg-fuchsia-600")},m(r,M){v(r,n,M),E(n,e),v(r,m,M),v(r,a,M),E(a,o),v(r,i,M),v(r,s,M),E(s,P),v(r,l,M),c&&c.m(r,M),v(r,u,M),v(r,d,M),E(d,p),b||(h=Tt(d,"click",t[3]),b=!0)},p(r,[M]){M&1&&O(o,r[0]),M&4&&O(P,r[2]),r[1]?c?c.p(r,M):(c=et(r),c.c(),c.m(u.parentNode,u)):c&&(c.d(1),c=null)},i:J,o:J,d(r){r&&f(n),r&&f(m),r&&f(a),r&&f(i),r&&f(s),r&&f(l),c&&c.d(r),r&&f(u),r&&f(d),b=!1,h()}}}function qn(t,n,e){let m,a=null,o=null,i=null,s=null,P=null,l=new Array(10),u="",d=0;function p(){let h=0;for(let r=0;r<o.fftSize;r++){P[r]=0;for(let M=0;M<o.fftSize-r;M++)P[r]+=s[M]*s[M+r];if(r>1&&P[r-2]-P[r-1]<0&&P[r-1]-P[r]>0&&(l[h]=r-1,h++,h>=l.length))break}let c=l[0];for(let r=1;r<h;r++)c+=l[r]-l[r-1];return c/=h,a.sampleRate/c}const b=()=>{console.log("started"),a=new window.AudioContext,o=a.createAnalyser(),s=new Float32Array(o.fftSize),P=new Float32Array(o.fftSize),navigator.mediaDevices.getUserMedia({audio:!0}).then(h=>{i=a.createMediaStreamSource(h),i.connect(o),s=new Float32Array(o.fftSize),P=new Float32Array(o.fftSize),setInterval(()=>{o.getFloatTimeDomainData(s),e(0,d=p())},300)}).catch(h=>{e(1,u=h.toString())})};return t.$$.update=()=>{t.$$.dirty&1&&e(2,m=On.fromFreq(d))},[d,u,m,b]}class Ln extends Nt{constructor(n){super(),St(this,n,qn,Hn,Et,{})}}export{Ln as default};