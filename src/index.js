#! /usr/bin/env node

async function main()
{
  const [_1, _2, name] = process.argv;
  
  console.log('명령행 인자: ', name);
}

main();
