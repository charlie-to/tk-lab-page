import { expect, test } from '@playwright/test';

// タイトルがあるかどうかをテストする
test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('高橋・狩川研究室');
});

//
// レイアウト関係のテスト
// メニューがあるかどうかをテストする
test('has menu', async ({ page }) => {
  await page.goto('/');
  //nav要素があるかどうかをテストする
  const nav = await page.$('nav');
  expect(nav).toBeTruthy();
});

// メニューのリンクがあるかどうかをテストする
test('has menu links', async ({ page }) => {
  await page.goto('/');
  //nav要素の中にリンクがあるかどうかをテストする
  const links = await page.$$('nav a');
  expect(links.length).toBeGreaterThan(0);
});
