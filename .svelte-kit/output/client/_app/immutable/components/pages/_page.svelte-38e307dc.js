import{S as Ot,i as Bt,s as It,k as T,q as w,a as z,l as x,m as q,r as F,h as d,c as R,n as S,b as v,G as D,I as Z,u as U,B as rt,J as zt}from"../../chunks/index-19859ce1.js";var J=(t,n)=>Array(Math.abs(n)+1).join(t);function dt(t){return t!==null&&typeof t=="object"&&typeof t.name=="string"}function ft(t){return t!==null&&typeof t=="object"&&typeof t.step=="number"&&typeof t.alt=="number"}var ht=[0,2,4,-1,1,3,5],pt=ht.map(t=>Math.floor(t*7/12));function At(t){const{step:n,alt:e,oct:a,dir:m=1}=t,r=ht[n]+7*e;if(a===void 0)return[m*r];const s=a-pt[n]-4*e;return[m*r,m*s]}var Rt=[3,0,4,1,5,2,6];function qt(t){const[n,e,a]=t,m=Rt[Gt(n)],r=Math.floor((n+1)/7);if(e===void 0)return{step:m,alt:r,dir:a};const s=e+4*r+pt[m];return{step:m,alt:r,oct:s,dir:a}}function Gt(t){const n=(t+1)%7;return n<0?7+n:n}var bt={empty:!0,name:"",pc:"",acc:""},it=new Map,Ht=t=>"CDEFGAB".charAt(t),Lt=t=>t<0?J("b",-t):J("#",t),$t=t=>t[0]==="b"?-t.length:t.length;function k(t){const n=JSON.stringify(t),e=it.get(n);if(e)return e;const a=typeof t=="string"?Vt(t):ft(t)?k(Qt(t)):dt(t)?k(t.name):bt;return it.set(n,a),a}var Ut=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function Xt(t){const n=Ut.exec(t);return[n[1].toUpperCase(),n[2].replace(/x/g,"##"),n[3],n[4]]}function W(t){return k(qt(t))}var Jt=(t,n)=>(t%n+n)%n,K=[0,2,4,5,7,9,11];function Vt(t){const n=Xt(t);if(n[0]===""||n[3]!=="")return bt;const e=n[0],a=n[1],m=n[2],r=(e.charCodeAt(0)+3)%7,s=$t(a),P=m.length?+m:void 0,c=At({step:r,alt:s,oct:P}),l=e+a+m,u=e+a,f=(K[r]+s+120)%12,p=P===void 0?Jt(K[r]+s,12)-12*99:K[r]+s+12*(P+1),y=p>=0&&p<=127?p:null,A=P===void 0?null:Math.pow(2,(p-69)/12)*440;return{empty:!1,acc:a,alt:s,chroma:f,coord:c,freq:A,height:p,letter:e,midi:y,name:l,oct:P,pc:u,step:r}}function Qt(t){const{step:n,alt:e,oct:a}=t,m=Ht(n);if(!m)return"";const r=m+Lt(e);return a||a===0?r+a:r}var tt={empty:!0,name:"",acc:""},Yt="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Zt="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Kt=new RegExp("^"+Yt+"|"+Zt+"$");function Wt(t){const n=Kt.exec(`${t}`);return n===null?["",""]:n[1]?[n[1],n[2]]:[n[4],n[3]]}var st={};function V(t){return typeof t=="string"?st[t]||(st[t]=tn(t)):ft(t)?V(en(t)):dt(t)?V(t.name):tt}var Pt=[0,2,4,5,7,9,11],vt="PMMPPMM";function tn(t){const n=Wt(t);if(n[0]==="")return tt;const e=+n[0],a=n[1],m=(Math.abs(e)-1)%7,r=vt[m];if(r==="M"&&a==="P")return tt;const s=r==="M"?"majorable":"perfectable",P=""+e+a,c=e<0?-1:1,l=e===8||e===-8?e:c*(m+1),u=nn(s,a),f=Math.floor((Math.abs(e)-1)/7),p=c*(Pt[m]+u+12*f),y=(c*(Pt[m]+u)%12+12)%12,A=At({step:m,alt:u,oct:f,dir:c});return{empty:!1,name:P,num:e,q:a,step:m,alt:u,dir:c,type:s,simple:l,semitones:p,chroma:y,coord:A,oct:f}}function nn(t,n){return n==="M"&&t==="majorable"||n==="P"&&t==="perfectable"?0:n==="m"&&t==="majorable"?-1:/^A+$/.test(n)?n.length:/^d+$/.test(n)?-1*(t==="perfectable"?n.length:n.length+1):0}function en(t){const{step:n,alt:e,oct:a=0,dir:m}=t;if(!m)return"";const r=n+1+7*a,s=r===0?n+1:r,P=m<0?"-":"",c=vt[n]==="M"?"majorable":"perfectable";return P+s+an(c,e)}function an(t,n){return n===0?t==="majorable"?"M":"P":n===-1&&t==="majorable"?"m":n>0?J("A",n):J("d",t==="perfectable"?n:n+1)}function et(t,n){const e=k(t),a=V(n);if(e.empty||a.empty)return"";const m=e.coord,r=a.coord,s=m.length===1?[m[0]+r[0]]:[m[0]+r[0],m[1]+r[1]];return W(s).name}function yt(t,n){const e=n.length,a=(t%e+e)%e;return n.slice(a,e).concat(n.slice(0,a))}var O={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},gt=t=>Number(t).toString(2),Mt=t=>parseInt(t,2),mn=/^[01]{12}$/;function jt(t){return mn.test(t)}var on=t=>typeof t=="number"&&t>=0&&t<=4095,rn=t=>t&&jt(t.chroma),ct={[O.chroma]:O};function Nt(t){const n=jt(t)?t:on(t)?gt(t):Array.isArray(t)?ln(t):rn(t)?t.chroma:O.chroma;return ct[n]=ct[n]||cn(n)}var sn=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Pn(t){const n=[];for(let e=0;e<12;e++)t.charAt(e)==="1"&&n.push(sn[e]);return n}function Mn(t){const n=t.split("");return n.map((e,a)=>yt(a,n).join(""))}function cn(t){const n=Mt(t),e=Mn(t).map(Mt).filter(r=>r>=2048).sort()[0],a=gt(e),m=Pn(t);return{empty:!1,name:"",setNum:n,chroma:t,normalized:a,intervals:m}}function ln(t){if(t.length===0)return O.chroma;let n;const e=[0,0,0,0,0,0,0,0,0,0,0,0];for(let a=0;a<t.length;a++)n=k(t[a]),n.empty&&(n=V(t[a])),n.empty||(e[n.chroma]=1);return e.join("")}var un=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 \u0394 ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 \u03949 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth/ninth","6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim \xB0 o"],["1P 3m 5d 7d","diminished seventh","dim7 \xB07 o7"],["1P 3m 5d 7m","half-diminished","m7b5 \xF8 -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 \u03949#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],dn=un;({...O});var St=[],X={};function fn(t,n,e){const a=pn(t),m={...Nt(t),name:e||"",quality:a,intervals:t,aliases:n};St.push(m),m.name&&(X[m.name]=m),X[m.setNum]=m,X[m.chroma]=m,m.aliases.forEach(r=>hn(m,r))}function hn(t,n){X[n]=t}function pn(t){const n=e=>t.indexOf(e)!==-1;return n("5A")?"Augmented":n("3M")?"Major":n("5d")?"Diminished":n("3m")?"Minor":"Unknown"}dn.forEach(([t,n,e])=>fn(t.split(" "),e.split(" "),n));St.sort((t,n)=>t.setNum-n.setNum);var An=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neopolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5P pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7M pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neopolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neopolitan major"],["1P 2M 3m 4P 5P 6m 7m","aeolian","minor"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],bn=An,vn={...O,intervals:[],aliases:[]},H={};function yn(t){return H[t]||vn}function gn(t,n,e=[]){const a={...Nt(t),name:n,intervals:t,aliases:e};return H[a.name]=a,H[a.setNum]=a,H[a.chroma]=a,a.aliases.forEach(m=>jn(a,m)),a}function jn(t,n){H[n]=t}bn.forEach(([t,n,...e])=>gn(t.split(" "),n,e));var Nn=Math.log(2),Sn=Math.log(440);function Et(t){const n=12*(Math.log(t)-Sn)/Nn+69;return Math.round(n*100)/100}var En="C C# D D# E F F# G G# A A# B".split(" "),_n="C Db D Eb E F Gb G Ab A Bb B".split(" ");function G(t,n={}){if(isNaN(t)||t===-1/0||t===1/0)return"";t=Math.round(t);const a=(n.sharps===!0?En:_n)[t%12];if(n.pitchClass)return a;const m=Math.floor(t/12)-1;return a+m}var Cn=["C","D","E","F","G","A","B"],_t=t=>t.name,Ct=t=>t.map(k).filter(n=>!n.empty);function Tn(t){return t===void 0?Cn.slice():Array.isArray(t)?Ct(t).map(_t):[]}var j=k,xn=t=>j(t).name,wn=t=>j(t).pc,Fn=t=>j(t).acc,Dn=t=>j(t).oct,kn=t=>j(t).midi,On=t=>j(t).freq,Bn=t=>j(t).chroma;function In(t){return G(t)}function zn(t){return G(Et(t))}function Rn(t){return G(Et(t),{sharps:!0})}function qn(t){return G(t,{sharps:!0})}var at=et,Gn=et,Tt=t=>n=>at(n,t),Hn=Tt,xt=t=>n=>at(t,n),Ln=xt;function wt(t,n){const e=j(t);if(e.empty)return"";const[a,m]=e.coord;return W(m===void 0?[a+n]:[a+n,m]).name}var $n=wt,mt=(t,n)=>t.height-n.height,Un=(t,n)=>n.height-t.height;function Ft(t,n){return n=n||mt,Ct(t).sort(n).map(_t)}function Xn(t){return Ft(t,mt).filter((n,e,a)=>e===0||n!==a[e-1])}var Jn=t=>{const n=j(t);return n.empty?"":G(n.midi||n.chroma,{sharps:n.alt>0,pitchClass:n.midi===null})};function Vn(t,n){const e=j(t);if(e.empty)return"";const a=j(n||G(e.midi||e.chroma,{sharps:e.alt<0,pitchClass:!0}));if(a.empty||a.chroma!==e.chroma)return"";if(e.oct===void 0)return a.pc;const m=e.chroma-e.alt,r=a.chroma-a.alt,s=m>11||r<0?-1:m<0||r>11?1:0,P=e.oct+s;return a.pc+P}var Qn={names:Tn,get:j,name:xn,pitchClass:wn,accidentals:Fn,octave:Dn,midi:kn,ascending:mt,descending:Un,sortedNames:Ft,sortedUniqNames:Xn,fromMidi:In,fromMidiSharps:qn,freq:On,fromFreq:zn,fromFreqSharps:Rn,chroma:Bn,transpose:at,tr:Gn,transposeBy:Tt,trBy:Hn,transposeFrom:xt,trFrom:Ln,transposeFifths:wt,trFifths:$n,simplify:Jn,enharmonic:Vn};Object.freeze([]);var ot=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],lt={...O,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},Yn=ot.map(Zn),nt={};Yn.forEach(t=>{nt[t.name]=t,t.aliases.forEach(n=>{nt[n]=t})});function Dt(t){return typeof t=="string"?nt[t.toLowerCase()]||lt:t&&t.name?Dt(t.name):lt}function Zn(t){const[n,e,a,m,r,s,P]=t,c=P?[P]:[],l=Number(e).toString(2);return{empty:!1,intervals:yn(m).intervals,modeNum:n,chroma:l,normalized:l,name:m,setNum:e,alt:a,triad:r,seventh:s,aliases:c}}function kt(t){return(n,e)=>{const a=Dt(n);if(a.empty)return[];const m=yt(a.modeNum,t),r=a.intervals.map(s=>et(e,s));return m.map((s,P)=>r[P]+s)}}kt(ot.map(t=>t[4]));kt(ot.map(t=>t[5]));function ut(t){let n,e,a;return{c(){n=T("h3"),e=w("Error: "),a=w(t[1])},l(m){n=x(m,"H3",{});var r=q(n);e=F(r,"Error: "),a=F(r,t[1]),r.forEach(d)},m(m,r){v(m,n,r),D(n,e),D(n,a)},p(m,r){r&2&&U(a,m[1])},d(m){m&&d(n)}}}function Kn(t){let n,e,a,m,r,s,P,c,l,u,f,p,y,A,B,b,E=JSON.stringify(t[2],null,4)+"",I,h,g,i=t[1]&&ut(t);return{c(){n=T("h1"),e=w("Frequency (Hz)"),a=z(),m=T("h2"),r=w(t[0]),s=z(),P=T("h2"),c=w(t[4]),l=z(),i&&i.c(),u=z(),f=T("button"),p=w("Start Pitch Detection"),y=z(),A=T("input"),B=z(),b=T("pre"),I=w(E),this.h()},l(o){n=x(o,"H1",{class:!0});var M=q(n);e=F(M,"Frequency (Hz)"),M.forEach(d),a=R(o),m=x(o,"H2",{class:!0,id:!0});var N=q(m);r=F(N,t[0]),N.forEach(d),s=R(o),P=x(o,"H2",{class:!0,id:!0});var _=q(P);c=F(_,t[4]),_.forEach(d),l=R(o),i&&i.l(o),u=R(o),f=x(o,"BUTTON",{class:!0});var L=q(f);p=F(L,"Start Pitch Detection"),L.forEach(d),y=R(o),A=x(o,"INPUT",{type:!0,accept:!0}),B=R(o),b=x(o,"PRE",{});var $=q(b);I=F($,E),$.forEach(d),this.h()},h(){S(n,"class","text-3xl font-bold underline bg-sky-500"),S(m,"class","text-3xl font-bold underline"),S(m,"id","frequency"),S(P,"class","text-3xl font-bold underline"),S(P,"id","notatiom"),S(f,"class","dark:md:hover:bg-fuchsia-600"),S(A,"type","file"),S(A,"accept","audio/*")},m(o,M){v(o,n,M),D(n,e),v(o,a,M),v(o,m,M),D(m,r),v(o,s,M),v(o,P,M),D(P,c),v(o,l,M),i&&i.m(o,M),v(o,u,M),v(o,f,M),D(f,p),v(o,y,M),v(o,A,M),v(o,B,M),v(o,b,M),D(b,I),h||(g=[Z(f,"click",t[5]),Z(A,"change",t[7]),Z(A,"change",t[6])],h=!0)},p(o,[M]){M&1&&U(r,o[0]),M&16&&U(c,o[4]),o[1]?i?i.p(o,M):(i=ut(o),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),M&4&&E!==(E=JSON.stringify(o[2],null,4)+"")&&U(I,E)},i:rt,o:rt,d(o){o&&d(n),o&&d(a),o&&d(m),o&&d(s),o&&d(P),o&&d(l),i&&i.d(o),o&&d(u),o&&d(f),o&&d(y),o&&d(A),o&&d(B),o&&d(b),h=!1,zt(g)}}}function Wn(t,n,e){let a;var m=this&&this.__awaiter||function(h,g,i,o){function M(N){return N instanceof i?N:new i(function(_){_(N)})}return new(i||(i=Promise))(function(N,_){function L(C){try{Q(o.next(C))}catch(Y){_(Y)}}function $(C){try{Q(o.throw(C))}catch(Y){_(Y)}}function Q(C){C.done?N(C.value):M(C.value).then(L,$)}Q((o=o.apply(h,g||[])).next())})};let r,s,P,c,l,u=new Array(10),f,p=0,y;const A=()=>{let h=0;for(let i=0;i<s.fftSize;i++){l[i]=0;for(let o=0;o<s.fftSize-i;o++)l[i]+=c[o]*c[o+i];if(i>1&&l[i-2]-l[i-1]<0&&l[i-1]-l[i]>0&&(u[h]=i-1,h++,h>=u.length))break}let g=u[0];for(let i=1;i<h;i++)g+=u[i]-u[i-1];return g/=h,r.sampleRate/g},B=()=>{console.log("started"),r=new window.AudioContext,s=r.createAnalyser(),c=new Float32Array(s.fftSize),l=new Float32Array(s.fftSize),navigator.mediaDevices.getUserMedia({audio:!0}).then(h=>{P=r.createMediaStreamSource(h),P.connect(s),c=new Float32Array(s.fftSize),l=new Float32Array(s.fftSize),setInterval(()=>{s.getFloatTimeDomainData(c),e(0,p=A())},300)}).catch(h=>{e(1,f=h.toString())})};let b;const E=h=>m(void 0,void 0,void 0,function*(){e(3,b=h.target.files[0]),e(3,b=yield b.arrayBuffer());const g=new AudioContext,i=yield g.decodeAudioData(b),o=g.createAnalyser(),M=g.createBufferSource();M.buffer=i,M.connect(o),M.start(),e(2,y=new Uint8Array(o.frequencyBinCount)),console.log(o.getByteFrequencyData(y))});function I(){b=this.value,e(3,b)}return t.$$.update=()=>{t.$$.dirty&1&&e(4,a=Qn.fromFreq(p))},[p,f,y,b,a,B,E,I]}class ne extends Ot{constructor(n){super(),Bt(this,n,Wn,Kn,It,{})}}export{ne as default};
