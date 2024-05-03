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
#### <strong>I'm Developing a Game</strong>
</div>
<span className="px-3"></span>I chose <a className='link-primary icon-link-hover link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='https://godotengine.org/'>Godot<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></a>, as I need something lightweight and open. The player will be able to modify and build their spaceship, explore our solar system at 'real scale', make allies, and fight foes in a realistic physics simulation. The goal is to show the grueling nature of space travel - and combat, while also giving the player the choice to play as they wish. 

`
const str3 = `
<div className="text-center border-bottom mb-2">\n
#### <strong>I'm a Builder</strong>
</div>
<span className="px-3"></span>My interests are pretty broad, but usually technical. I am a long-time 3d printing enthusiast, I own 3 printers, and one of my jobs involved maintaining a fleet. I've been using CAD programs since my early teens, mostly designing practical prints. One such build is my coaxial dual motor drone, which will use code I wrote as part of a rocketry competition and remote control to fly as a rocket would.
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