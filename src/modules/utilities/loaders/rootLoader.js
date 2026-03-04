export default async function rootLoader() {
    // Currently used for testing
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));

    return true;
}
