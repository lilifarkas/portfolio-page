import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import MapExplorerdll from '../MarsExplorer/Codecool.MarsExploration.MapExplorer.dll'
import MapExplorerexe from '../MarsExplorer/Codecool.MarsExploration.MapExplorer.exe'
import MapExplorerpdb from '../MarsExplorer/Codecool.MarsExploration.MapExplorer.pdb'
import MapGeneratordll from '../MarsExplorer/Codecool.MarsExploration.MapGenerator.dll'
import MapGeneratorexe from '../MarsExplorer/Codecool.MarsExploration.MapGenerator.exe'
import MapGeneratorpdb from '../MarsExplorer/Codecool.MarsExploration.MapGenerator.pdb'
import mapOne from '../MarsExplorer/Resources/exploration-0.map'
import mapTwo from '../MarsExplorer/Resources/exploration-1.map'
import mapThree from '../MarsExplorer/Resources/exploration-2.map'


const createZip = async () => {
    const zip = new JSZip();

    const MapExplorerdepsjson = await fetch('../MarsExplorer/Codecool.MarsExploration.MapExplorer.deps.json').then(response => response.text());
    const MapGeneratordepsjson = await fetch('../MarsExplorer/Codecool.MarsExploration.MapGenerator.deps.json').then(response => response.text());
    const MapExplorerruntimeconfig = await fetch('../MarsExplorer/Codecool.MarsExploration.MapExplorer.runtimeconfig.json').then(response => response.text());
    const MapGeneratorruntimeconfig = await fetch('../MarsExplorer/Codecool.MarsExploration.MapGenerator.runtimeconfig.json').then(response => response.text());

    zip.file("Codecool.MarsExploration.MapExplorer.dll", MapExplorerdll);
    zip.file("Codecool.MarsExploration.MapExplorer.exe", MapExplorerexe);
    zip.file("Codecool.MarsExploration.MapExplorer.pdb", MapExplorerpdb);
    zip.file("Codecool.MarsExploration.MapExplorer.deps.json", MapExplorerdepsjson);
    zip.file("Codecool.MarsExploration.MapExplorer.runtimeconfig.json", MapExplorerruntimeconfig);
    zip.file("Codecool.MarsExploration.MapGenerator.dll", MapGeneratordll);
    zip.file("Codecool.MarsExploration.MapGenerator.exe", MapGeneratorexe);
    zip.file("Codecool.MarsExploration.MapGenerator.pdb", MapGeneratorpdb);
    zip.file("Codecool.MarsExploration.MapGenerator.deps.json", MapGeneratordepsjson);
    zip.file("Codecool.MarsExploration.MapGenerator.runtimeconfig.json", MapGeneratorruntimeconfig);

    const resources = zip.folder("Resources");

    resources.file("exploration-0.map", mapOne);
    resources.file("exploration-1.map", mapTwo);
    resources.file("exploration-2.map", mapThree);
    
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "MarsExplorer.zip");
    });

};

export default createZip;
