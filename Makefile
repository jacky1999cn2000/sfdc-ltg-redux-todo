front_bash:
	cd front && docker run -it --rm -v `pwd`:/usr/src/app -w /usr/src/app --entrypoint="bash" node:5

app_bash:
	docker run -it --rm -v `pwd`:/usr/src/app -w /usr/src/app --entrypoint="bash" node:5
