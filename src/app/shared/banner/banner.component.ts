import { Component, Input } from '@angular/core'
import { ImageModel } from '@models'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() images!: ImageModel[]
}
