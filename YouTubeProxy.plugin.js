/**
 * @name YouTubeProxy
 * @author nathanfranke
 * @description Changes YouTube embed links to a proxy, letting you play restricted videos easily.
 * @version 0.0.1
 */

module.exports = class YouTubeProxy {
	start() {
		this.clock = setInterval(function () {
			const re = /https:\/\/www.youtube.com\/embed\/([a-zA-Z0-9_-]{11})?/;
			for (let frame of document.getElementsByTagName("iframe")) {
				console.log(frame.src);
				let match = re.exec(frame.src);
				if (match != null) {
					let id = match[1];
					frame.src = `https://nathanfranke.github.io/discordytproxy/?${id}`;
				}
			}
		}, 200, 200);
	}

	stop() {
		clearInterval(this.clock);
	}
}
