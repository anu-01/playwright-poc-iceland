import fs from 'fs';
import path from 'path';
import { test } from '@playwright/test';
import { parse } from 'csv-parse/sync';


export async function readFile(filepath){
const records = parse(fs.readFileSync(filepath), {
  columns: true,
  skip_empty_lines: true
});
return records
}