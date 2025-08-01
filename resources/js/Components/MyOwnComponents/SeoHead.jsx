import { Head } from '@inertiajs/react';

export default function SEOHead({
    title = "Default Page Title",
    description = "Default description of your page for SEO and sharing.",
    url = "https://example.com",
    image = "https://example.com/default-image.jpg"
}) {
    return (
        <Head>
            {/* Basic SEO */}
            <title>{title}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Your Website Name" />

            {/* Twitter Card (Twitter/X) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@YourTwitterAccount" />
        </Head>
    );
}