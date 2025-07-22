import { Head } from '@inertiajs/react';

export default function Second() {
    return (
            <Head>

                <title>Second page</title>

                <meta charSet="UTF-8"></meta>

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="robots" content="index, follow" />

                <meta name="description" content="Check out the second page" />

                <meta property="og:title" content="Second page" />
                <meta property="og:description" content="Check out the second page" />
                <meta property="og:image" content="https://example.com/image.jpg" />
                <meta property="og:url" content="https://example.com" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Check out the second page" />
                <meta name="twitter:description" content="Check out the best deals on electronics." />
                <meta name="twitter:image" content="https://example.com/image.jpg" />
            </Head>
    )
}