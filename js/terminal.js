$(function ($, undefined) {
	$('#term_demo').terminal(function (command) {
		command = command.trim();
		var res = command.toLowerCase();
		if (res == 'hi rohan') {
			this.echo("Hi I am Rohan, glad you are here.\n", { finalize: function (div) { div.css("color", "blue"); } })
			this.echo("1. Experience", { finalize: function (div) { div.css("color", "green"); } })
			this.echo("2. Socials\n", { finalize: function (div) { div.css("color", "green"); } });
			this.echo("3. Shift to color UI\n", { finalize: function (div) { div.css("color", "green"); } });
		}
		else if (command == '2') {
			this.echo("mailto:\nrohan.ravi96@gmail.com\n")
			this.echo("social:\nhttps://www.facebook.com/rohan.agarwal.184007\n")
			this.echo("https://www.linkedin.com/in/rohan-agarwal-a1497a127/\n")
		}

		//   if (command == 'exp'){ .This was wrong. 
		else if (command == '1') {
			this.echo("Backend Engineer, JioSaavn, Mumbai, Jul 2019 - Present\n\n", { finalize: function (div) { div.css("color", "green"); } })
			this.echo("\n")
			this.echo("1. REST API's: Have worked over the optimization and development of REST API's.")
			this.echo("\n")
			this.echo("2. JioPhone JioSaavn App: Have contributed in the development of JioSaavn's JioPhone app. Majorly worked over the user tracking events feature.")
			this.echo("\n")
			this.echo("3. Backend Development: Integration of front end element created by frontend developer and currently working on PHP, JSX, and react redux framework to create JioSaavn's web portal.")
			this.echo("\n")
			this.echo("4. JioSaavn Embed Widget: Implemented the complete backend architecture for the embed widget, in React Redux.This product is integrated among various companies websites like BookMyShow, News18 etc and is widely scalable.");
			this.echo("\n")
			this.echo("Software Developement Engineering Intern, Amazon Development Center, Hyderabad, May 2018 - Jul 2018\n\n", { finalize: function (div) { div.css("color", "green"); } })
			this.echo("\n")
			this.echo("1. Address Learning System (ALS) Model OnBoarding: ALS team provides the predictions of data related to shipments to their clients (Product Manager, analysts etc.) as per the requirement of what type of data needed by the client, and this procedure was done manually yet. I automated the client onboarding procedure, reducing the manual interference near to zero.");
			this.echo("\n")
			this.echo("2. Web Crawler: In this project, I crawled dierent websites for commercial business hours, processed the raw unstructured data into the structured form and stored it into the AWS S3 buckets");
			this.echo("\n")
		}
		else if (command == '3') {
			window.open('file:///Users/rohanagarwal/Desktop/ProfileWebsite/indexFront.html', '_blank');
		}

		else {
			if (command !== '') {
				try {
					var result = window.eval(command);
					if (result !== undefined) {
						this.echo(new String(result));
					}
				} catch (e) {
					this.error(new String(e));
				}
			} else {
				this.echo('');
			}
		}


	}, {
		greetings: 'Hello Hola Bonjour Namastey from Rohan,Want to know about me, then type Hi Rohan',
		name: 'GetToKnowRohan.io',
		prompt: '> ',
		color: 'green'
	});
});

