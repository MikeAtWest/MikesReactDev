export interface ISavingThrows {
    STR: boolean;
    DEX: boolean;
    CON: boolean;
    INT: boolean;
    WIS: boolean;
    CHA: boolean;
}

export class SavingThrows implements ISavingThrows {
    public STR: boolean = false;
    public DEX: boolean = false;
    public CON: boolean = false;
    public INT: boolean = false;
    public WIS: boolean = false;
    public CHA: boolean = false;

    constructor(STR: boolean, DEX: boolean, CON: boolean, INT: boolean, WIS: boolean, CHA: boolean) {
        this.STR = STR;
        this.DEX = DEX;
        this.CON = CON;
        this.INT = INT;
        this.WIS = WIS;
        this.CHA = CHA;
    }
}
