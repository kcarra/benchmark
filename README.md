### Benchmark

~~ Benchmark is a personal project to help understand more about the internals of SSR (server-side rendering). It is heavily inspired by [clockwork](https://github.com/itsgoingd/clockwork) and my goal is to create something similar for SSR JS apps. To start, benchmark will be built to work with SSR React apps build using [vite](https://vitejs.dev/), but this will probably be expanded in the future. Ideally benchmark would be able to be brought into any SSR JS app independent of framework and tooling. ~~

Benchwark is designed to show insights about your node application. The inspiration for the project comes from the laravel package [clockwork](https://github.com/itsgoingd/clockwork).

### Insights Benchmark will provide

Initially benchmark will be built to live on the server, either as middleware or completly independent. It will be used to provide insight into the SSR process. Initial functionality that I will be working on:

- ~~ Component render time - How long does it take the server to render the server component and the size of the rendered component ~~

- Network calls - Understand http/s calls being made from your node application

- Future ideas...

### Contributing

If others find this concept interesting and want to contribute I would be happy to collaborate! 🎉

### TODO:

- [ ] bootstrap project
