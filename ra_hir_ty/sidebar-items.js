initSidebarItems({"enum":[["CallableDef",""],["GenericPredicate","Like `generics::WherePredicate`, but with resolved types: A condition on the parameters of a generic item."],["ImplTraitLoweringMode",""],["InferTy","The kinds of placeholders we need during type inference. There's separate values for general types, and for integer and float variables. The latter two are used for inference of literal values (e.g. `100` could be one of several integer types)."],["Ty","A type."],["TyDefId",""],["TypeCtor","A type constructor or type name: this might be something like the primitive type `bool`, a struct like `Vec`, or things like function pointers or tuples."],["ValueTyDefId",""]],"fn":[["autoderef",""],["callable_item_sig","Build the signature of a callable item (function, struct or enum variant)."],["do_infer_query","The entry point of type inference."]],"mod":[["db","FIXME: write short doc here"],["diagnostics","FIXME: write short doc here"],["display","FIXME: write short doc here"],["expr","FIXME: write short doc here"],["method_resolution","This module is concerned with finding methods that a given type provides. For details about how this works in rustc, see the method lookup page in the rustc guide and the corresponding code mostly in librustc_typeck/check/method/probe.rs."],["primitive","Defines primitive types, which have a couple of peculiarities:"],["traits","Trait solving using Chalk."]],"struct":[["ApplicationTy","A nominal type with (maybe 0) type parameters. This might be a primitive type like `bool`, a struct, tuple, function pointer, reference or several other things."],["Binders",""],["Canonical","Basically a claim (currently not validated / checked) that the contained type / trait ref contains no inference variables; any inference variables it contained have been replaced by bound variables, and `num_vars` tells us how many there are. This is used to erase irrelevant differences between types before using them in queries."],["FnSig","A function signature as seen by type inference: Several parameter types and one return type."],["InferenceResult","The result of type inference: A mapping from expressions and patterns to types."],["ProjectionTy","A \"projection\" type corresponds to an (unnormalized) projection like `<P0 as Trait<P1..Pn>>::Foo`. Note that the trait and all its parameters are fully known."],["Substs","A list of substitutions for generic parameters."],["SubstsBuilder",""],["TraitRef","A trait with type parameters. This includes the `Self`, so this represents a concrete type implementing the trait. Name to be bikeshedded: TraitBound? TraitImplements?"],["TyLoweringContext",""],["TypeCtorId","This exists just for Chalk, because Chalk just has a single `StructId` where we have different kinds of ADTs, primitive types and special type constructors like tuples and function pointers."]],"trait":[["TypeWalk","This allows walking structures that contain types to do something with those types, similar to Chalk's `Fold` trait."]],"type":[["PolyFnSig","A polymorphic function signature."]]});