import { getOwnerName } from "@/lib/utils";

describe("getOwnerName", () => {
    it("should return the owner name for a valid URL with multiple path segments", () => {
        const url = "https://github.com/facebook/react";
        const owner = getOwnerName(url);
        expect(owner).toEqual("facebook");
    });

    it("should return the correct owner name when there are more than two path segments", () => {
        const url = "https://github.com/facebook/react/issues";
        const owner = getOwnerName(url);
        expect(owner).toEqual("facebook");
    });

    it("should return an empty string for a valid URL with fewer than two path segments", () => {
        const url = "https://github.com/facebook";
        const owner = getOwnerName(url);
        expect(owner).toEqual("");
    });

    it("should return an empty string for a URL with no path", () => {
        const url = "https://github.com/";
        const owner = getOwnerName(url);
        expect(owner).toEqual("");
    });

    it("should return an empty string for an empty URL", () => {
        const url = "";
        const owner = getOwnerName(url);
        expect(owner).toEqual("");
    });

    it("should return an empty string for an invalid URL", () => {
        const url = "invalid-url";
        const owner = getOwnerName(url);
        expect(owner).toEqual("");
    });
});
