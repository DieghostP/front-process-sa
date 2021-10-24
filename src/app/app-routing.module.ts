import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAreasComponent } from './modulos/organizacion/areas/editar-areas/editar-areas.component';
import { ListarAreasComponent } from './modulos/organizacion/areas/listar-areas/listar-areas.component';
import { NuevoAreasComponent } from './modulos/organizacion/areas/nuevo-areas/nuevo-areas.component';
import { EditarColaboradoresEmpresaComponent } from './modulos/organizacion/colaboradoresEmpresa/editar-colaboradores-empresa/editar-colaboradores-empresa.component';
import { ListarColaboradoresEmpresaComponent } from './modulos/organizacion/colaboradoresEmpresa/listar-colaboradores-empresa/listar-colaboradores-empresa.component';
import { NuevoColaboradoresEmpresaComponent } from './modulos/organizacion/colaboradoresEmpresa/nuevo-colaboradores-empresa/nuevo-colaboradores-empresa.component';
import { EditarEmpresasComponent } from './modulos/organizacion/empresas/editar-empresas/editar-empresas.component';
import { ListarEmpresasComponent } from './modulos/organizacion/empresas/listar-empresas/listar-empresas.component';
import { NuevoEmpresasComponent } from './modulos/organizacion/empresas/nuevo-empresas/nuevo-empresas.component';
import { EditarRolesComponent } from './modulos/organizacion/roles/editar-roles/editar-roles.component';
import { ListarRolesComponent } from './modulos/organizacion/roles/listar-roles/listar-roles.component';
import { NuevoRolesComponent } from './modulos/organizacion/roles/nuevo-roles/nuevo-roles.component';
import { EditarUnidadesComponent } from './modulos/organizacion/unidades/editar-unidades/editar-unidades.component';
import { ListarUnidadesComponent } from './modulos/organizacion/unidades/listar-unidades/listar-unidades.component';
import { NuevoUnidadesComponent } from './modulos/organizacion/unidades/nuevo-unidades/nuevo-unidades.component';
import { EditarColaboradoresComponent } from './modulos/personas/colaboradores/editar-colaboradores/editar-colaboradores.component';
import { ListarColaboradoresComponent } from './modulos/personas/colaboradores/listar-colaboradores/listar-colaboradores.component';
import { NuevoColaboradoresComponent } from './modulos/personas/colaboradores/nuevo-colaboradores/nuevo-colaboradores.component';
import { EditarEstadosTareasComponent } from './modulos/tareasYflujos/estadosTareas/editar-estados-tareas/editar-estados-tareas.component';
import { ListarEstadosTareasComponent } from './modulos/tareasYflujos/estadosTareas/listar-estados-tareas/listar-estados-tareas.component';
import { NuevoEstadosTareasComponent } from './modulos/tareasYflujos/estadosTareas/nuevo-estados-tareas/nuevo-estados-tareas.component';
import { EditarFlujosDeTrabajoComponent } from './modulos/tareasYflujos/FlujosDeTrabajo/editar-flujos-de-trabajo/editar-flujos-de-trabajo.component';
import { ListarFlujosDeTrabajoComponent } from './modulos/tareasYflujos/FlujosDeTrabajo/listar-flujos-de-trabajo/listar-flujos-de-trabajo.component';
import { NuevoFlujosDeTrabajoComponent } from './modulos/tareasYflujos/FlujosDeTrabajo/nuevo-flujos-de-trabajo/nuevo-flujos-de-trabajo.component';
import { EditarTareasComponent } from './modulos/tareasYflujos/tareas/editar-tareas/editar-tareas.component';
import { ListarTareasComponent } from './modulos/tareasYflujos/tareas/listar-tareas/listar-tareas.component';
import { NuevoTareasComponent } from './modulos/tareasYflujos/tareas/nuevo-tareas/nuevo-tareas.component';
import { EditarTareasFlujosDeTrabajoComponent } from './modulos/tareasYflujos/tareasFlujosDeTrabajo/editar-tareas-flujos-de-trabajo/editar-tareas-flujos-de-trabajo.component';
import { ListarTareasFlujosDeTrabajoComponent } from './modulos/tareasYflujos/tareasFlujosDeTrabajo/listar-tareas-flujos-de-trabajo/listar-tareas-flujos-de-trabajo.component';
import { NuevoTareasFlujosDeTrabajoComponent } from './modulos/tareasYflujos/tareasFlujosDeTrabajo/nuevo-tareas-flujos-de-trabajo/nuevo-tareas-flujos-de-trabajo.component';

const routes: Routes = [
  //Modulo Personas --> Colaboradores
  {path:'listarColaboradores', component:ListarColaboradoresComponent},
  {path:'nuevoColaborador', component:NuevoColaboradoresComponent},
  {path:'editarColaborador', component:EditarColaboradoresComponent},

  // Modulo Organizacion
  // Empresas
  {path:'listarEmpresas', component:ListarEmpresasComponent},
  {path:'nuevoEmpresas', component:NuevoEmpresasComponent},
  {path:'editarEmpresas', component:EditarEmpresasComponent},

  // Areas
  {path:'listarAreas', component:ListarAreasComponent},
  {path:'nuevoAreas', component:NuevoAreasComponent},
  {path:'editarAreas', component:EditarAreasComponent},

  // Roles
  {path:'listarRoles', component:ListarRolesComponent},
  {path:'nuevoRoles', component:NuevoRolesComponent},
  {path:'editarRoles', component:EditarRolesComponent},

  // Unidades
  {path:'listarUnidades', component:ListarUnidadesComponent},
  {path:'nuevoUnidades', component:NuevoUnidadesComponent},
  {path:'editarUnidades', component:EditarUnidadesComponent},

  // Colaboradores-Empresa
  {path:'listarColaboradoresEmpresa', component:ListarColaboradoresEmpresaComponent},
  {path:'nuevoColaboradoresEmpresa', component:NuevoColaboradoresEmpresaComponent},
  {path:'editarColaboradoresEmpresa', component:EditarColaboradoresEmpresaComponent},

  // Modulo Tareas y Flujos
  // Tareas
  {path:'listarTareas', component:ListarTareasComponent},
  {path:'nuevoTareas', component:NuevoTareasComponent},
  {path:'editarTareas', component:EditarTareasComponent},

  // Estados-Tareas
  {path:'listarEstadosTareas', component:ListarEstadosTareasComponent},
  {path:'nuevoEstadosTareas', component:NuevoEstadosTareasComponent},
  {path:'editarEstadosTareas', component:EditarEstadosTareasComponent},

  // Flujos-De-Trabajo
  {path:'listarFlujosDeTrabajo', component:ListarFlujosDeTrabajoComponent},
  {path:'nuevoFlujosDeTrabajo', component:NuevoFlujosDeTrabajoComponent},
  {path:'editarFlujosDeTrabajo', component:EditarFlujosDeTrabajoComponent},
  // Tareas-Flujo-De-Trabajo
  {path:'listarTareasFlujosDeTrabajo', component:ListarTareasFlujosDeTrabajoComponent},
  {path:'nuevoTareasFlujosDeTrabajo', component:NuevoTareasFlujosDeTrabajoComponent},
  {path:'editarTareasFlujosDeTrabajo', component:EditarTareasFlujosDeTrabajoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ListarColaboradoresComponent,
  NuevoColaboradoresComponent,
  EditarColaboradoresComponent,
  ListarEmpresasComponent,
  NuevoEmpresasComponent,
  EditarEmpresasComponent,
  ListarAreasComponent,
  NuevoAreasComponent,
  EditarAreasComponent,
  ListarRolesComponent,
  NuevoRolesComponent,
  EditarRolesComponent,
  ListarUnidadesComponent,
  NuevoUnidadesComponent,
  EditarUnidadesComponent,
  ListarColaboradoresEmpresaComponent,
  NuevoColaboradoresEmpresaComponent,
  EditarColaboradoresEmpresaComponent,
  ListarTareasComponent,
  NuevoTareasComponent,
  EditarTareasComponent,
  ListarEstadosTareasComponent,
  NuevoEstadosTareasComponent,
  EditarEstadosTareasComponent,
  ListarFlujosDeTrabajoComponent,
  NuevoFlujosDeTrabajoComponent,
  EditarFlujosDeTrabajoComponent,
  ListarTareasFlujosDeTrabajoComponent,
  NuevoTareasFlujosDeTrabajoComponent,
  EditarTareasFlujosDeTrabajoComponent
]
