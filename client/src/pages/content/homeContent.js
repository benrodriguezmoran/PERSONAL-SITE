const str = `

<div className="text-center border-bottom mb-2">\n
#### <strong >You have reached my page</strong>
##### <strong >let me tell a little about myself</strong>
</div>
<span className="px-3"></span>I am a full-stack web developer and aspiring game dev from the beautiful state of Michigan.
I'm technical by nature; if there's something to be learned, I'll be sure to have it understood. 
To the side you'll see a random set of pictures I've taken and want to share. You'll find my scenic photos, family's pets, projects, and more 

`
const str2 = `
<div className="text-center border-bottom mb-2">\n
#### <strong>I build things</strong>
</div>
<span className="px-3"></span>I am a huge 3d printing enthusiast, own 3 printers, and one of my jobs involved maintaining a fleet. Most of my other hobbies revolve around problem solving: be it programming, electronics, or mechanical design. I do these things for a kind of entertainment, some satisfaction of finally putting a challenge to rest. 
`
const str3 = `
<div className="text-center border-bottom mb-2">\n
#### <strong>I built this page</strong>
</div>
<span className="px-3"></span>You can only learn what you don't know through necessity, so I learned everything to host this page. Certainly a lot more than necessary, but it gives me  
a practical demonstration of my knowledge, and a place to dedicate my personal work to and advance my software career.

`
export function about1() {
    return str;
};
export function about2() {
    return str2;
};
export function about3() {
    return str3;
}