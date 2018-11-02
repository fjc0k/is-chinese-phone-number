module.exports = {
  name: 'is-chinese-phone-number',
  moduleName: 'isChinesePhoneNumber',
  input: 'src/index.ts',
  outDir: 'lib',
  format: ['cjs', 'umd', 'umd-min', 'es'],
  banner: true,
  typescript2: {
    clean: true
  }
}
