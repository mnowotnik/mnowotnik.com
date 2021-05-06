
.PHONY: public yarn public/cv.pdf build develop

yarn=yarn
ifeq (, $(shell which yarn))
yarn=node_modules/.bin/yarn
endif

develop:

build: $(yarn) public public/_headers public/resume.pdf

$(yarn):
	which $@ || npm install yarn

node_modules:
	$(yarn) install

public:
	$(yarn) run build

public/_headers: _headers
	cp _headers $@

public/resume.pdf:
	$(yarn) run build-resume
	mv resume.pdf public/

develop:
	$(yarn) run develop

deploy:
	node_modules/.bin/netlify deploy --prod --dir ./public
