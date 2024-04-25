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
<span className="px-3"></span>I am a long-time 3d printing enthusiast, own 3 printers, and one of my jobs involved maintaining a fleet. I'm developing a game in Godot, something I hope to share in time. 
I'm facinated by control systems, since a rocketry challenge in highschool I've iterated on my own flight control code, eventually to publish an open source drone. 
`
const str3 = `
<div className="text-center border-bottom mb-2">\n
#### <strong>I build websites</strong>
</div>
<span className="px-3"></span>Including this one. It gives me a place to dedicate my personal work to 
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