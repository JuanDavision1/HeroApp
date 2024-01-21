import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogeComponent } from '../../components/confirmdialoge/confirmdialoge.component';
 
@Component({
  selector: 'app-new-page',
 
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent  implements OnInit{
  public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:         new FormControl<string>('',{nonNullable:true}),
    publisher:         new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:         new FormControl(''),
    first_appearance:  new FormControl(''),
    characters:      new FormControl(''),
    alt_img:         new FormControl('')
  })
public publisher =[
  {id:'DC Comics',desc:'DC - Commics'},
  {id:'Marvel Comics',desc:'Marvel - Commics'}
]
constructor(private serviceHero:HeroService,private activateroute:ActivatedRoute,private router:Router,
  private snackbar:MatSnackBar,private dialog:MatDialog){  }
get currecthero():Hero{
  const herotoBack = this.heroForm.value as Hero;
  return herotoBack;
}
ngOnInit(): void {
  if(!this.router.url.includes('Edit')) return ;
  this.activateroute.params.pipe(
    switchMap(({id})=> this.serviceHero.getheroId(id)),
  ).subscribe( hero=>{
    if(!hero) return this.router.navigateByUrl('/');
    this.heroForm.reset(hero);
    return
  })
}
onsubmit():void{
if(this.heroForm.invalid) return ;
if(this.currecthero.id ){
  this.serviceHero.updatehero(this.currecthero).subscribe(hero=>{
this.showsnackbar(`${hero.superhero} Updated!`)
  })
  return
}
this.serviceHero.addhero(this.currecthero).subscribe(hero=>{
  this.router.navigate(['/heroes/Edit',hero.id])
  this.showsnackbar(`${hero.superhero} Created!`)
})

}
ondeleteHero(){
  if(!this.currecthero.id) throw Error('Hero id is reqired ')
  const dialogRef = this.dialog.open(ConfirmdialogeComponent, {
    data: this.heroForm.value,
  });
  dialogRef.afterClosed()
  .pipe(
    filter((reslt:boolean)=> reslt===true ),
    tap(result=> console.log({result})),
    switchMap(()=>this.serviceHero.deleteHerobyid(this.currecthero.id)),
    filter((wasdeleted:boolean)=> wasdeleted),

  )
  .subscribe(() => {
    this.router.navigate(['/heroes']);
  })

}
showsnackbar(message:string):void{
this.snackbar.open(message,'done',{
  duration:2500,
})
}
}
