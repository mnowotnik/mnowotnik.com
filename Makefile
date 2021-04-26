
.PHONY: public yarn public/cv.pdf

yarn=yarn
ifeq (, $(shell which yarn))
yarn=node_modules/.bin/yarn
endif

build: $(yarn) public public/_headers public/cv.pdf

$(yarn):
	which $@ || npm install yarn

node_modules:
	$(yarn) install

public:
	$(yarn) run build

public/_headers: _headers
	cp _headers $@

public/resume.pdf:
	$(yarn) run build-cv
	mv resume.pdf public/

develop:
	$(yarn) run develop
