const assert = require("assert");
Feature("Liking resto");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked resto", ({ I }) => {
  I.seeElement("#list-resto");
  I.see("Tidak ada resto untuk ditampilkan", ".empty-favorite");
});
Scenario("liking one resto", async ({ I }) => {
  I.seeElement("#list-resto");
  I.see("Tidak ada resto untuk ditampilkan", ".empty-favorite");
  I.amOnPage("/");
  I.waitForElement(".cards-gallery", 5);
  I.seeElement(".cards-gallery");
  I.click("#button-img");
  I.waitForElement("#favorite-button", 2);
  I.seeElement("#favorite-button");
  I.click("#favorite-button");
  I.amOnPage("/#/favorite");
  I.waitForElement(".cards-gallery", 1);
  I.seeElement(".cards-gallery");
});
Scenario("unliking one resto", async ({ I }) => {
  I.seeElement("#list-resto");
  I.see("Tidak ada resto untuk ditampilkan", ".empty-favorite");
  I.amOnPage("/");
  I.waitForElement(".cards-gallery", 5);
  I.seeElement(".cards-gallery");
  I.click("#button-img");
  I.waitForElement("#favorite-button", 2);
  I.seeElement("#favorite-button");
  I.click("#favorite-button");
  I.amOnPage("/#/favorite");
  I.waitForElement(".cards-gallery", 1);
  I.seeElement(".cards-gallery");
  I.click("#button-img");
  I.waitForElement("#favorite-button", 2);
  I.seeElement("#favorite-button");
  I.click("#favorite-button");
  I.amOnPage("/#/favorite");
  I.waitForElement(".list-content-resto", 1);
  I.seeElement(".list-content-resto");
  I.see("Tidak ada resto untuk ditampilkan", ".empty-favorite");
  I.dontSee(".cards-gallery");
});
