/**
 * @name YouTubeEmbedFix
 * @author nathanfranke
 * @description Patch YouTube embed links with a proxy, letting you easily play restricted videos within Discord.
 * @version 1.0.0
 * @authorId 201537559740940288
 * @donate https://paypal.me/natwf
 * @source https://github.com/nathanfranke/discord-youtube-embed-fix
 */

module.exports = class YouTubeProxy {
	start() {
		// Note for reviewers, this timer is hacky and inefficient, but it gets the job done.
		// If you find a better solution, I will happily merge your contribution!
		this.clock = setInterval(function () {
			const re = /https:\/\/www.youtube.com\/embed\/([a-zA-Z0-9_-]{11})?/;
			for (let frame of document.getElementsByTagName("iframe")) {
				let match = re.exec(frame.src);
				if (match != null) {
					let id = match[1];
					frame.src = `https://nathanfranke.github.io/discord-youtube-embed-fix/#${id}`;
				}
			}
		}, 200, 200);
	}

	stop() {
		clearInterval(this.clock);
	}
}
