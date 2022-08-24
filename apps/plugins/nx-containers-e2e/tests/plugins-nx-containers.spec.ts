import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';

describe('app e2e', () => {
  // Setting up individual workspaces per
  // test can cause e2e runs to take a long time.
  // For this reason, we recommend each suite only
  // consumes 1 workspace. The tests should each operate
  // on a unique project in the workspace, such that they
  // are not dependent on one another.
  beforeAll(() => {
    ensureNxProject(
      '@narcisse-app/nx-containers',
      'dist/libs/plugins/nx-containers'
    );
  });

  afterAll(() => {
    // `nx reset` kills the daemon, and performs
    // some work which can help clean up e2e leftovers
    runNxCommandAsync('reset');
  });

  it('should create a container app', async () => {
    const projectName = uniq('app');
    await runNxCommandAsync(
      `generate @narcisse-app/nx-containers:app ${projectName}`
    );
    const result = await runNxCommandAsync(`build ${projectName}`);
    expect(result.stdout).toContain('Executor ran');
  }, 120000);

  describe('--directory', () => {
    it('should create src in the specified directory', async () => {
      const projectName = uniq('app');

      await runNxCommandAsync(
        `generate @narcisse-app/nx-containers:app ${projectName} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`apps/subdir/${projectName}/src/index.ts`)
      ).not.toThrow();
    }, 120000);
  });

  describe('--tags', () => {
    it('should add tags to the project', async () => {
      const projectName = uniq('app');

      await runNxCommandAsync(
        `generate @narcisse-app/nx-containers:app ${projectName} --tags e2etag,e2ePackage`
      );
      const project = readJson(`apps/${projectName}/project.json`);
      expect(project.tags).toEqual(['e2etag', 'e2ePackage']);
    }, 120000);
  });
});
