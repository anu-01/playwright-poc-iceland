import { test, expect } from '@playwright/test';
import LoginPage from './pages/loginPage.ts';
import { log } from 'console';
import {readFile} from '../utils/csvHelpers.ts'
import path from 'path';


test.describe(() => {
    test.use({ storageState: 'playwright/.auth/standarduser.json' });
  
    test('@bvt user test', async ({ page }) => {
      // page is authenticated as a user

      await page.goto('/');
    });

    test('@bvt read csv and print test', async ({  }) => {
        // page is authenticated as a user
    const records = await readFile(path.resolve('tests/testdata/input.csv'));
    for(const record of records){
        console.log(record.test_case, record.some_value, record.some_other_value);
    }
      });
  });

