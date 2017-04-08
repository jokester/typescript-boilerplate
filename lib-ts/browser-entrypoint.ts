declare const $$webpack_dev: boolean;

if ($$webpack_dev) {
    document.write("hey, developer");
} else {
    document.write("hi, user");
}
