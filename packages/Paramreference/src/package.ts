/* Do not change these import lines to match external modules in webpack configuration */
import * as grok from 'datagrok-api/grok';
import * as ui from 'datagrok-api/ui';
import * as DG from 'datagrok-api/dg';

export const _package = new DG.Package();

//name: info
export function info() {
  grok.shell.info(_package.webRoot);
}

//name: BioreactorConfiguration
//tags: model, example
//description: Choose available bioreactor models and parameters - example of parameter referencing
//input: string bioreactor { choices: paramreference:ListBioreactors(); nullable: false }
//input: string impeller { choices: paramreference:ListImpellers(@bioreactor); nullable: false }
//output: object result
export async function BioreactorConfiguration(
    bioreactor: string) {
    grok.shell.info(`Chosen bioreactor: bioreactor`);

}

//name: ListBioreactors
//output: list<string> result
export async function ListBioreactors() : Promise<string[]> {
    try {
        const files = await _package.files.list('bioreactors/', false, 'csv');
        return files.map((f) => f.name);
    } catch (_e) {
        return [];
    }
}

//name: ListImpellers
//output: list<string> result
export async function ListImpellers(bioreactor: string) : Promise<string[]> {
    grok.shell.info(`Chosen bioreactor: ${bioreactor}`);
    try {
        let csv = await grok.dapi.files.readAsText(
    `System:AppData/Paramreference/${bioreactor}.csv`
        );
        return csv.split('\n').slice(1);
    } catch (_e) {
        return [];
    }
}

