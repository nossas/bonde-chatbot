# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.2.1"></a>
## [1.2.1](https://github.com/nossas/bonde-bot/compare/v1.2.0...v1.2.1) (2017-09-20)


### Bug Fixes

* **speeches:** update pec 181 texts ([3ae8297](https://github.com/nossas/bonde-bot/commit/3ae8297))
* **workers:** babel build process queue worker ([2481006](https://github.com/nossas/bonde-bot/commit/2481006))
* **workers:** rollback worker babel build ([567009b](https://github.com/nossas/bonde-bot/commit/567009b))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/nossas/bonde-bot/compare/v1.1.6...v1.2.0) (2017-09-20)


### Bug Fixes

* **devops:** Move staging deploy config to cluster ([680e1cb](https://github.com/nossas/bonde-bot/commit/680e1cb))
* **devops:** Upgrade node version ([40c7bde](https://github.com/nossas/bonde-bot/commit/40c7bde))
* **package:** add cors package [#48](https://github.com/nossas/bonde-bot/issues/48) ([15fe766](https://github.com/nossas/bonde-bot/commit/15fe766))
* **share:** beta cover image ([6396735](https://github.com/nossas/bonde-bot/commit/6396735))
* **speeches:** email validation ([97b72d9](https://github.com/nossas/bonde-bot/commit/97b72d9))


### Features

* **mass-message:** enqueue mass message sending [#48](https://github.com/nossas/bonde-bot/issues/48) ([d22c8f3](https://github.com/nossas/bonde-bot/commit/d22c8f3))
* **speeches:** add speech V1 pressure text ([74797ff](https://github.com/nossas/bonde-bot/commit/74797ff))
* **workers:** mass message optional quick reply button [#48](https://github.com/nossas/bonde-bot/issues/48) ([d1d7931](https://github.com/nossas/bonde-bot/commit/d1d7931))
* **workers:** process bot mass message queue close [#48](https://github.com/nossas/bonde-bot/issues/48) ([b5da575](https://github.com/nossas/bonde-bot/commit/b5da575))



<a name="1.1.6"></a>
## [1.1.6](https://github.com/nossas/bonde-bot/compare/v1.1.5...v1.1.6) (2017-09-07)



<a name="1.1.5"></a>
## [1.1.5](https://github.com/nossas/bonde-bot/compare/v1.1.4...v1.1.5) (2017-09-01)



<a name="1.1.4"></a>
## [1.1.4](https://github.com/nossas/bonde-bot/compare/v1.1.3...v1.1.4) (2017-08-31)



<a name="1.1.3"></a>
## [1.1.3](https://github.com/nossas/bonde-bot/compare/v1.1.2...v1.1.3) (2017-08-30)



<a name="1.1.2"></a>
## [1.1.2](https://github.com/nossas/bonde-bot/compare/v1.1.1...v1.1.2) (2017-08-30)


### Bug Fixes

* **speeches:** mistype ([1add768](https://github.com/nossas/bonde-bot/commit/1add768))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/nossas/bonde-bot/compare/v1.1.0...v1.1.1) (2017-08-25)


### Bug Fixes

* **graphql:** add jwt environment variable fix [#37](https://github.com/nossas/bonde-bot/issues/37) ([60594ce](https://github.com/nossas/bonde-bot/commit/60594ce))
* add more messages to interact with AI ([845414d](https://github.com/nossas/bonde-bot/commit/845414d))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/nossas/bonde-bot/compare/v1.0.0...v1.1.0) (2017-08-22)


### Bug Fixes

* **bot-events:** pass bot data on postback event [#22](https://github.com/nossas/bonde-bot/issues/22) ([c17196e](https://github.com/nossas/bonde-bot/commit/c17196e))
* **speeches:** include QR_G into email check flow ([67bcac0](https://github.com/nossas/bonde-bot/commit/67bcac0))


### Features

* **ai:** add artificial intelligence to bot [#31](https://github.com/nossas/bonde-bot/issues/31) ([02c5323](https://github.com/nossas/bonde-bot/commit/02c5323))
* **bot:** integrate pressure with ai [#22](https://github.com/nossas/bonde-bot/issues/22) ([ccfa1b8](https://github.com/nossas/bonde-bot/commit/ccfa1b8))
* **bot:** pressure and share on feed close [#22](https://github.com/nossas/bonde-bot/issues/22) ([beb352c](https://github.com/nossas/bonde-bot/commit/beb352c))
* **routes:** render pressure email body text [#34](https://github.com/nossas/bonde-bot/issues/34) ([0d60aad](https://github.com/nossas/bonde-bot/commit/0d60aad))
* **speeches:** map messages keys with AI intent keys close [#34](https://github.com/nossas/bonde-bot/issues/34) ([3ec100f](https://github.com/nossas/bonde-bot/commit/3ec100f))
* **speeches:** texts consolidated in a single file close [#34](https://github.com/nossas/bonde-bot/issues/34) ([ba96a8e](https://github.com/nossas/bonde-bot/commit/ba96a8e))


### Performance Improvements

* **bot:** fetch specified widgets only on init [#22](https://github.com/nossas/bonde-bot/issues/22) ([22baea7](https://github.com/nossas/bonde-bot/commit/22baea7))



<a name="1.0.0"></a>
# 1.0.0 (2017-08-04)


### Bug Fixes

* **mass-message:** recipients fetch policy network-only fix [#23](https://github.com/nossas/bonde-bot/issues/23) ([098e8a9](https://github.com/nossas/bonde-bot/commit/098e8a9))


### Features

* **bot:** instantiate multiple bots via configuration close [#16](https://github.com/nossas/bonde-bot/issues/16) ([1680cd6](https://github.com/nossas/bonde-bot/commit/1680cd6))
* **bot:** save user interactions [#5](https://github.com/nossas/bonde-bot/issues/5) ([a79182f](https://github.com/nossas/bonde-bot/commit/a79182f))
* **bot:** send mass message close [#5](https://github.com/nossas/bonde-bot/issues/5) ([5c8a7e5](https://github.com/nossas/bonde-bot/commit/5c8a7e5))
* **graphql:** fetch bot configs; add queries and mutations [#16](https://github.com/nossas/bonde-bot/issues/16) ([1907edf](https://github.com/nossas/bonde-bot/commit/1907edf))
* **handle:** accept handle response with context ([07fe665](https://github.com/nossas/bonde-bot/commit/07fe665))
* **mass-message:** filter by user name close [#25](https://github.com/nossas/bonde-bot/issues/25) ([0579116](https://github.com/nossas/bonde-bot/commit/0579116))
* **mass-message:** filter recipients by bot selection close [#25](https://github.com/nossas/bonde-bot/issues/25) ([a3b465e](https://github.com/nossas/bonde-bot/commit/a3b465e))
* **mass-message:** initial page layout [#5](https://github.com/nossas/bonde-bot/issues/5) ([1e332f7](https://github.com/nossas/bonde-bot/commit/1e332f7))
* **messages:** custom share button message [#3](https://github.com/nossas/bonde-bot/issues/3) ([807638f](https://github.com/nossas/bonde-bot/commit/807638f))
* **packages:** add support to standard-version close [#12](https://github.com/nossas/bonde-bot/issues/12) ([dcafa14](https://github.com/nossas/bonde-bot/commit/dcafa14))
* **packages:** babel-preset-latest to use the latest syntax [#14](https://github.com/nossas/bonde-bot/issues/14) ([60e8e93](https://github.com/nossas/bonde-bot/commit/60e8e93))
* **pages:** initial login page [#5](https://github.com/nossas/bonde-bot/issues/5) ([7eb5e6f](https://github.com/nossas/bonde-bot/commit/7eb5e6f))
* **script:** update script dialog to pt-br [#2](https://github.com/nossas/bonde-bot/issues/2) ([701b084](https://github.com/nossas/bonde-bot/commit/701b084))
* **scripts:** add option to easily change script [#6](https://github.com/nossas/bonde-bot/issues/6) ([5262480](https://github.com/nossas/bonde-bot/commit/5262480))
* **scripts:** add script v2 [#3](https://github.com/nossas/bonde-bot/issues/3) ([1586e9d](https://github.com/nossas/bonde-bot/commit/1586e9d))
* **scripts:** implement handle for receive and reply message [#1](https://github.com/nossas/bonde-bot/issues/1) ([08fb1dd](https://github.com/nossas/bonde-bot/commit/08fb1dd))
* **server:** add support to graphql requests close [#10](https://github.com/nossas/bonde-bot/issues/10) ([9835a2f](https://github.com/nossas/bonde-bot/commit/9835a2f))
* **server:** setup express server [#16](https://github.com/nossas/bonde-bot/issues/16) ([3a2aed8](https://github.com/nossas/bonde-bot/commit/3a2aed8))
