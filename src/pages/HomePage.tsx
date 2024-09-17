export const HomePage = () => {
    return (
        <div className="px-3 md:pr-0 space-y-4 text-sm md:text-base text-bower-brown">
            <h2 className="text-xl md:text-2xl font-semibold">Bower — a package manager for the web</h2>
            <p>Websites are made of lots of things frameworks, libraries, assets, and utilities. Bower manages all these things for you.</p>
            <p>
                Keeping track of all these packages and making sure they are up to date (or set to the specific versions you need) is
                tricky. Bower to the rescue!
            </p>
            <p>
                Bower can manage components that contain HTML, CSS, JavaScript, fonts or even image files. Bower doesn’t concatenate or
                minify code or do anything else - it just installs the right versions of the packages you need and their dependencies.
            </p>
            <p>
                Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the
                stuff you're looking for. Bower keeps track of these packages in a manifest file, bower.json. How you use packages is up to
                you. Bower provides hooks to facilitate using packages in your tools and workflows.
            </p>
            <p>
                Bower is optimized for the front-end. If multiple packages depend on a package - jQuery for example - Bower will download
                jQuery just once. This is known as a flat dependency graph and it helps reduce page load.
            </p>
        </div>
    );
};
